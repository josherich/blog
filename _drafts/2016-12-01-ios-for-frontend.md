---
layout: post
title:  "2016 Quote Part2"
description: "2016 quotes 中"
date:   2016-11-25 10:02:39
categories: Reading
tags: [quote, book, 2016]
---

Obj-C

Selector 就是用字串表示某個物件的某個 method
Selector 就是 Objective-C 的 virtual table 中指向實際執行 function pointer 的一個 C 字串
因為 method 可以用字串表示，因此，某個 method 就可以變成可以用來傳遞的參數。

Objective-C程式中，可以直接呼叫 C 的 API，而如果你將 .m 改名叫做.mm，程式裡頭還可以混和 C++ 語法，變成 Objective-C++

Objective-C 的程式在 compile time 時，Compiler 其實會編譯成 C然後繼續編譯。所有的Objective-C Class 會變成 C 的 Structure，所有的method （以及 block）會被編譯成 C function
在執行的時候，Objective-C runtime 才會建立某個 C Structure 與 C function 的關聯


performSelector:
[myObject performSelector:@selector(doSomething)];
objc_msgSend(myObject, @selector(doSomething), NULL);

發生 unrecognized selector sent to instance 錯誤而導致應用程式 crash

#import <objc/runtime.h>
// 中間省略
class_addMethod([MyClass class], @selector(myMethod), (IMP)myMethodIMP, "v@:");

[(MyButton *)button setTarget:self];
[(MyButton *)button setAction:@selector(clickAction:)];

if ([[UIScreen mainScreen] respondsToSelector:@selector(scale)]) {}

auto-release
這一輪runloop 中先不釋放，而是到了下一輪 runloop開始時才釋放這些記憶體。如果使用 try…catch 捕捉例外錯誤，就會跳出原本的runloop，而導致應該釋放的記憶體沒被釋放。

performSelector:withObject:afterDelay:
[self performSelector:@selector(doSomething) withObject:nil afterDelay:1.0];

[NSObject cancelPreviousPerformRequestsWithTarget:self];


-performSelectorOnMainThread:withObject:waitUntilDone:modes:
-performSelectorOnMainThread:withObject:waitUntilDone:
-performSelector:onThread:withObject:waitUntilDone:modes:
-performSelector:onThread:withObject:waitUntilDone:
-performSelectorInBackground:withObject:

背景執行時，這個 method 的內部需要建立自己的 Auto-Release Pool。


[super performSelector:@selector(doSomething)];
呼叫的是 super 的 performSelector: ，最後結果仍然等同於 [self doSomething] 。

App 不需要連結特定版本的 runtime 與 libraries，就算 libraries 中 export 出來的 function 換了位置，只要 selector 不變，還是可以找到應該要執行的 C function，所以舊的 App 在新版本的作業系統上執行時，新版本作業系統並不需要保留舊版的 Libraries，而避免了 C++ 等語言中所謂 DLL Hell 問題。

Swift 又改變了 virtual table 的實作，走回像是 C++、Java 等語言的 virtual table 設計。因為 Swift 也有必須連結指定版本 runtime 的問題，所以在每個 Swift App 的 App bundle 中，其實都包了一份 Swift runtime。

Swift 的 Extension 特性，也與 Objective-C 的 Category 差不多

Core Foundation，像NSString 其實會對應到 Core Foundation 裡頭的 CFStringRef，NSArray 對應到 CFArrayRef，而你甚至可以直接把 Foundation 物件 cast成 Core Foundation 的型別，當你遇到一個需要傳入 CFStringRef 的function的時候，只要建立 NSString 然後 cast 成 CFStringRef 傳入就可以了

Factory Method Pattern
對最上層的class，輸入指定的條件，就會從挑選一個符合指定條件的 subclass、建立 instance 回傳 

UIApplication、 NSUserDefault、NSNotificationCenter 以及 Mac OS X上的 NSWorkSpace 等，都採用 singleton

@interface MyClass : NSObject
+ (MyClass *)sharedInstance;
@end

static MyClass *sharedInstance = nil;

@implementation MyClass
+ (MyClass *)sharedInstance
{
    return sharedInstance ?
           sharedInstance :
           (sharedInstance = [[MyClass alloc] init]);
}
@end

Singleton 大多會使用 GCD 的 dispatch_once 實作

存檔的時候，檔名的慣例是原本的 class 名稱加上 category的名稱，中間用加號連接，以我們剛剛建立的 CustomCompare為例，存檔時就要存成 NSString+CustomCompare.h 及 NSString+CustomCompare.m

Objective-C runtime 並不保證 category 的載入順序

Xcode 中所提供的 file template 中，如果你選擇建立一個 UIViewController 的 subclass，就可以看到在 .m 檔案的最前面，幫你預留了一塊 extensions 的宣告

要使用 Associated Objects，我們需要匯入 objc/runtime.h，然後呼叫 objc_setAssociatedObject 建立 setter，用 getAssociatedObject 建立 getter

雖然我們不能在 category 中增加成員變數，但是卻可以在 extensions中宣告

isKindOfClass: 是可以 override 掉的



呼叫的時候，才發現這塊記憶體該存在的物件已經不在了，這種狀況叫做over-release 或是 invalid memory reference，會造成應用程式 crash，crash log 上面會告訴你錯誤類型是 EXC_BAD_ACCESS


Reference Count/Retain/Release
[anObject retain];
[anObject release];
[anObject retainCount];

delegate 物件不該 retain
@synthesize語法，在編譯我們的程式的時候，其實就會被編譯成我們在上面所寫的getter/setter

在釋放記憶體的時候， myVar = nil 與 self.myVar =
nil這兩段程式是不一樣的，前者只是單純的將 myVar 的指標指向nil，但是並沒有釋放原本所指向的記憶體位置，所以會造成記憶體漏水，但後者卻等同於呼叫[self setMyVar:nil] ，會先釋放 myVar 原本指向的位置，然後將 myVar 設成nil。


self.view.frame.origin.x 其實會被編譯成 [[self view] frame].origin.x ，這沒問題，但是如果要改變 view 的frame，我們還是要透過 setFrame: ，所以即使只是要改變 x座標的位置

在 ARC 環境下從 NSInvocation 拿出參數時，就必須要額外注意記憶體管理問題。


循環 Retain
1.把 delegate 設為 strong reference
2.某個物件的某個 property 是一個 block，但是在這個 block 裡頭把物件自己給 retain 了一份。
3. 使用 timer 的時候，到了 dealloc 的時候才停止 timer。

在建立這個 timer 的時候，我們指定給 timer 的 target，也會被 timer retain 一份，因此，我們想要在 view controller 在 dealloc 的時候，才停止 timer 就會有問題: 因為 view controller 已經被 timer retain 起來了，所以只要 timer 還在執行，view controller 就不可能走到 dealloc 的地方。應該改成，在 viewDidDisappear: 的時候，就要停止 timer。

讓 C 型態也可以被當做 Objetive-C 物件，接受 ARC 的記憶體管理的方式，叫做 Toll-Free Bridged.
__bridge 會把 Core Foundation 的 C 資料型態轉換成 Objetive-C 物件，但是不會多做 retain 與 release。
__bridge_retained 會把 Core Foundation 的 C 資料型態轉換成 Objetive-C 物件，並且會做一次 retain，但是之後必須由我們自己手動呼叫 CFRelease，釋放記憶體。
__bridge_transfer 會把 Core Foundation 物件轉換成 Objective-C 物件，並且會讓 ARC 主動添加 retain 與 release。


在記憶體不足的時候，除了會對 UIApplication 的 delegate （就是所謂的 AppDelegate）呼叫applicationDidReceiveMemoryWarning: 之外，也會對系統中所有的UIViewController 呼叫 didReceiveMemoryWarning

從 iOS 問世到 iOS 5，只要發生記憶體不足，就會把所有不在最前景的 View Controller 的 view 釋放掉。因為這些 View Controller 的 view 並不在畫面上，用戶根本看不到，所以暫時先放掉也沒有關係。

當我們在透過 alloc 、 init 或initWithNibName:bundle: 建立 View Controller 的時候，並不會馬上建立 view，而是當我們呼叫 view 這個屬性的時候才會建立。

所以在 iOS 6 之前，你曾經遇到某個 View Controller 回復到初始值這樣的問題，就是：原本有狀態的 view 因為記憶體警告被釋放了，而我們如果在 viewDidLoad 再次被呼叫的時候，沒有正確還原狀態，自然只有初始狀態的 view。

view controller 被放到最上層時，會被呼叫到 viewWillAppear: 以及 viewDidAppear: ，離開最上層時，會呼叫 viewWillDisappear: 與 viewDidDisappear:

delegate 
就是 將眾多的 callback，集中在一個物件上 。

一個物件是否有實作某個 protocol，我們可以用 conformsToProtocol: 檢查。

Delegate 屬性應該要用 Weak，而非 Strong, 防止循环引用

@protocol 這個關鍵字是在 Objective-C 2.0 之後出現的，在這之前要定義 protocol，則是寫成 NSObject 的 category，前者叫做 formal protocol，後者則稱為 informal protocol。

delegate 相當於 event handler的用途

### block
如果我們想要讓某個 block 可以改動某個外部的變數，我們就要在這個需要可以被 block 改動的變數前面，加上 __block 關鍵字。

- self block retain
由於 block 中用到的 Objective-C 物件都會被多 retain 一次，這邊所指的 Objective-C 物件也包含 self，所以，假使有個物件的 property 是一個block，而這個 block 裡頭又用到了 self，就會遇到循環 retain 而無法釋放記憶體的問題：self 要被釋放才會去釋放這個 property，但是這個 property 作為 block 又 retain 了 self 導致 self 無法被釋放。

```
__weak MyClass *weakSelf = self;
self.myBlock = ^ {
    [weakSelf doSomthing];
};
```

### notification

要發送 notification 的時候，為了考慮其他開發者會預期在 main thread 收到 notification，所以我們也就在 main thread 發送 notification，像是透過 GCD，把 postNotification 的呼叫送到 dispatch_get_main_queue() 上

### singleton
```
@interface MyClass : NSObject
+ (instancetype) sharedInstance;
@end

@implementation MyClass

+ (instancetype) sharedInstance
{
    static MyClass *instance = nil;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        instance = [[MyClass alloc] init];
    });
    return instance;
}
```


@end

### Null
NULL
nil
Nil
NSNull
NSNotFound
WebUndefined

Class cls = NSClassFromString(@"Abcdefg");
if (cls != Nil) {
    // Do something.
}

### webview 

JavaScript 裡頭的 undefined 傳到 Objective-C 或 Swift 的 method 裡頭時，就會變成 WebUndefined

```
- (void)numberWithA:(id)a plusB:(id)b callback:(id)callback
{
    NSInteger result = [a integerValue] + [b integerValue];

    [callback callWebScriptMethod:@"call" withArguments:
        [NSArray arrayWithObjects:callback, [NSNumber
            numberWithInteger:result], nil]];
}

window.controller.numberWithA_plusB_callback_(1, 2, function(result) {
    var main = document.getElementById('main');
    main.innerText = result;
});

```

### run loop

建立 auto-release pool
呼叫 UIApplicationMain，而這個 function 會
建立 UIApplication 這個 singleton 物件
開始執行 run loop
這些步驟完畢後，代表 app 已經開始執行，所以
對 UIApplication 的 delegate 呼叫 -application:didFinishLaunchingWithOptions:


### UITouch
UIEvent 同時也多了一組叫做 predictedTouchesForTouch: 的 method，預測下一個觸控事件可能出現的位置，因此，即使這個觸控事件還沒有發生，但我們便可以偷吃步先去做繪圖相關的工作，讓畫面看起來即時更新。

在使用 Apple Pencil 的時候，我們可以透過 -preciseLocationInView: 與 precisePreviousLocationInView: 這兩個 method，知道更精細的觸控位置。

altitudeAngle、azimuthAngleInView: 與 azimuthUnitVectorInView: 可以讓你知道 Apple Pencil 的高度與方位。

### JavaScriptCore
JavaScriptCore 裡頭有幾種基本的資料：

JSGlobalContextRef ：執行 JavaScript 的 context
JSValueRef ：在 JavaScript 中所使用的各種資料，包括字串、數字以及 function，都會包裝成 Value，我們可以從數字、JSStringRef 或 JSObject 產生 JSValueRef，也可以轉換回來。需要特別注意的是，JS 裡頭的 null 也是一個 JSValueRef（JSValueMakeUndefined 與 JSValueMakeNull）。
JSStringRef ：JavaScriptCore 使用的字串。用完記得要 release。
JSObjectRef ：JavaScript Array、Function 等。

### Threading
三种 Multi-thread
Perform Selector
GCD （Grand Centeral Dispatch）
NSOperation 與 NSOperationQueue

```
- (void)backgroundTask
{
    @autoreleasepool {
    // Write your code here.
    }
}
```

#### GCD
```
dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
    [someObject doSomethingHere];
});
```
優先程度會從 2 到 -2 安排，2 為最重要，-2 為最不重要

想要在 main thread 執行工作，那麼，就把 dispatch_get_global_queue 換成 dispatch_get_main_queue

- 通知 main thread

```
dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
    [someObject doSomethingInBackground];
    dispatch_async(dispatch_get_main_queue(), ^{
        [someObject doSomethingOnMainThread];
    });
});
```
dispatch_sync
dispatch_once
dispatch_after(setTimeout)
dispatch_apply(repeat)


