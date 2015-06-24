---
layout: post
title:  "Things I don't know since I was sick of Angular.js"
description: "I have never wanted to write a single line of Angular.js code"
date:   2015-01-28 20:02:39
categories: FE
tags: [Frontend, Angular, Google]
---

## ngMessages
four step rock with it, require, inject, write template, animate

```javascript
require('angular-messages');
angular.module('app', ['ngMessages']);
```

```javascript
// message template identified by id
<script type="text/ng-template" id="error-messages">
  <div ng-message="required">This field is required</div>
  <div ng-message="minlength">This field is too short</div>
</script>


```javascript
  <form name="myForm">
    <input type="email"
    id="email"
    name="myEmail"
    ng-model="email"
    minlength="5"
    required />
    // use ng-messages-include to specify template
    <div ng-messages="myForm.myEmail.$error" ng-messages-include="my-custom-messages" class="msg-container">
      // this required message has overridden the template message
      <div ng-message="required" class="msg-alert">You did not enter your email address</div>

      // this is a brand new message and will appear last in the prioritization
      <div ng-message="email" class="msg-email">Your email address is invalid</div>
    </div>
  </form>
```


```css
.msg-alert {
  transition:1s linear all;
}

.msg-alert.ng-enter {}
.msg-alert.ng-enter.ng-enter-active {}

.msg-alert.ng-leave {}
.msg-alert.ng-leave.ng-leave-active {}
```