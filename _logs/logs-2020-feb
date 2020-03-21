---
layout: default
title: Logs 2020 Feb
---

## 2020-02-02

### Rust

```rust
use rand::Rng;

String::new()

std::cmp::Ordering;

match guess.cmp(&secret_number) {
  Ordering::Less => println!(" ")
  _ => " "
}

let guess : u32 = match guess.trim().parse() {
  Ok(num) => num,
  Err(_) => continue,
};

let tup : (i32, f64, u8) = (500, 6.4, 1);

fn five() -> i32 {
  5
}

let mut guess = String::new()

io::stdin().read_line(&mut guess).expect("Fail")

let guess : u32 = guess.trim().parse().expect(" ")

for element in a.iter() { }

for number in (1..4).rev() { }

enum Message {
  Quit,
  Move { x: i32, y: i32 },
  Write,
}

enum Option<T> {
  Some(T),
  None,
}

let y : Option<i8> = Some(5) = None

let v : Vec<i32> = Vec::new();

let v = Vec![1,1,2]

let third : &i32 = &v[2]
let third : &i32 = v.get(2)

for i in &v { }

for i in &mut v { }

// deref coersion
let s3 = s1 + &s2

use std::collections::HashMap;
let mut scores = HashMap::new();

let scores : HashMap<_,_> = teams.iter().zip(initial.iter()).collect()

entry().or_insert()

panic!()

RUST_BACKTRACE=1

enum Result<T, E. {
  OK(T),
  Err(E),
}

let f = match f {
  Ok(file) => file,
  Err(error) => {
    panic!("fail")
  }
}

println!("{:?}", error)

match f.read_to_string(&mut s)

unwrap()

impl Guess {
  pub fn new(value: u32) -> Guess
}

fn largest<T>(list: &[T]) -> T { }

struct Point<T> {
  x: T,
  y: T,
}

impl <T> Point<T> {
  fn x(&self) -> &T {
    &self.x
  }
}

// Trait Type
// Trait Bound
fn some_f<T, U>(t: T, u: U) -> i32
  where T: Display + Clone,
        U: Clone + Debug,

// lifetimes
fn largest<'a>(x: &'a str, y: &'a str) -> &'a str { }

// smart pointer
Box<T>
Rc<T>
Ref<T>
RefMut<T>

RefCell<T>
std::cell:RefCell
// allows mutable borrows checked at runtime
self.a.borrow_mut()

std::rc::Rc
Rc::Clone
Rc::strong_count(&a)

// prevent ref cycle
Weak<T>
RefCell<Weak<Node>>
RefCell::new(Weak::new())
// branch, leaf
*leaf.parent.borrow_mut() = Rc::downgrade(&branch)
leaf.parent.borrow().upgrade()


// thread
use std::thread;
use std::time::Duration;

let handle = thread::spawn(|| {
  thread::sleep(Duration::from_millis(1))
})

handle.join().unwrap();

// thread take ownership
thread::spawn(move || { })


```


## 2020-02-04

### [opslang](https://doc.openresty.com/en/opslang/)


### [G style guide](https://github.com/google/styleguide)


## 2020-02-25

https://danluu.com/discontinuities/


https://cli.github.com/manual/examples#checking-out

```bash
gh pr [status, list, view, checkout, create]
gh issue [status, list, view, create]
gh help
```

## 2020-02-26

### EditorConfig

indent_style: tab, space

indent_size: tab, int

tab_width: int

end_of_line: lf, crlf, cr

charset:

  latin1
  utf-8
  utf-16be
  utf-16le
  utf-8-bom

trim_trailing_whitespace

insert_final_newline

max_line_length

## 2020-02-28

### top k freq word

```bash
# Split text into words by replacing non-word characters with newlines
tr -cs A-Za-z '\n' |
# Convert uppercase to lowercase
tr A-Z a-z |
# Sort so that identical words occur adjacently
sort |
# Count occurrences of each line
uniq -c |
# Sort numerically by decreasing number of word occurrences
sort -rn |
# Quit after printing the K specified number of words
sed ${1}q
```

### find the top K pairs of words and print the Levenshtein distance between each pair

```bash
# Split text into words by replacing non-word characters with newlines
tr -cs A-Za-z '\n' |
# Convert uppercase to lowercase
tr A-Z a-z |
# Make pairs out of words by testing and storing the previous word
awk 'prev {print prev, $1} {prev = $1}' |
# Sort so that identical words occur adjacently
sort |
# Count occurrences of each line
uniq -c |
# Sort numerically by decreasing number of word occurrences
sort -nr |
# Print the K specified number of pairs
head -n $1 |
# Remove the occurrence count, keeping the two words
awk '{print $2, $3}' |
# Print the Levenshtein distance between word pair (autosplit into @F)
perl -a -MText::LevenshteinXS -e 'print distance(@F), "\n"'
```







