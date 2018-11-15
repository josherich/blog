
The Web's Declarative, composable future

http://addyosmani.com/blog/the-webs-declarative-composable-future/

网页端的技术演化是围绕着解决复杂度进行的。复杂度带来的坏处显而易见，更好的模式和平台原生技术降低了复杂度，带来的好处也是显而易见的。复杂度的表现形式多种多样，当我们观察过去几年网页开发的全景后发现，通用模式的价值是很明显的。因此把这个平台加入extensible web manifesto也变得很有价值。

今年，Web Components加入了这个平台，并引入了一种处理HTML和行为的新方法，这种方法比处理独立的HTML更清晰。总之，运用Web Components的未来网页开发是申明式的。在未来，JavaScript仍会存在，但只是作为通用组件间的胶水。不久的将来，Web应用会完全由标签组成。有些标签(例如<audio>)由浏览器提供，另外的一些(例如<slide-show>)由自定义的UI库提供，或由你自己编写。我们基于DOM的属性来构建我们的API，形成组件，因此，标签会比以前有更好的兼容性。
This year, the platform is getting Web Components, bringing forward a way to make the relationships between markup and behaviour a lot less vague when you’re looking at the HTML. In one word, a future with Web Components is declarative. JavaScript still exists in this future, but is relegated back to a role where it acts as a glue holding the other bits of a component together. Web Apps in the near future will be composed almost entirely from elements (tags). Some of these elements (like the <audio> tag) will be given to you by the browser but others like <slide-show> will be custom elements provided by UI libraries or you can write it yourself. As the layer we’re using for composability is the DOM using attributes for our APIs, our elements will be significantly more interoperable than they’ve been in the past.
在未来，不同库中得标签和组件能方便地组合使用。
我们讲能用简短的代码生成标签，并尽可能复用子标签的功能。当然某些应用仍然很复杂。Shadow DOM给了CSS，HTML和JavaScript独立的边界，让开发者更好地构建独立的模块。有了这些精心开发的模块，开发者能够专注于应用的业务逻辑。在Web Component的圈子里习惯把这叫做声明式的复兴。

Imagine a future where elements or components written with different libraries can be used together with a level of ease.

Elements will (ideally) be created with a minimal amount of script and will try to reuse the functionality of other sub-elements where possible. Some apps are of course going to require more complexity than this, but this will not be the norm. Shadow DOM gives us an isolation boundary for CSS, HTML and JavaScript which make it fundamentally easier to build something in isolation. This world allows us to easily stitch together (compose) pre-made elements that are well engineered so we can focus on the logic in our apps and build better applications with ease. In Web Component circles, this whole movement is known as the declarative renaissance and it’s going to change things for the better.

One of the opportunities Web Components introduce is a chance to re-think and re-purpose existing best practices. If you’ve read my large-scale JS patterns write-ups of old, you may have gone on to craft systems using a componentization model for re-use, an event bus for inter-component communication and facades for abstracting away implementation detail behind an API. These ideas are still very much relevant today and I see them being evolved for a Web Component world through solutions like Polymer – polyfills and sugaring for this world and X-Tag. Polymer already has good support for message passing between elements and an API driven by element attributes is technically already a facade. We will also see much evolve through existing MVC libraries like Ember and Angular, as they look to embrace custom elements. Keep in mind, Web Components are not a silver bullet and the engineering best practices we as a community have strived for over the past few years will continue to be necessary:

When creating Web Components, keep in mind:
☑ Accessibility
☑ Performance
☑ Re-usability
☑ Responsiveness
☑ Namespacing
☑ Docs & Testing
— Addy Osmani (@addyosmani)
March 24, 2014

In addition to the changes we’re going to see in Web Components, the rest of the platform is also evolving. JavaScript (through ES6 and ES7) is getting a true module system, data observation (Object.observe()), better language constructs (arrow functions, rest parameters, destructuring assignment) and native promises after years of client-side libraries coalescing around an idiom for async behavior. Our future is going to be more modular, more focused and more composable. Elements and JavaScript modules will work together in harmony (pun intended) for managing complexity. CSS is also growing up, slowly getting better primitives for containment, saying ‘this is a view, it’s something likely to change’ (via the will-change property). We may even finally fix the broken mess that is offline through Service Workers, giving us a way to build always-available applications in a sane and layered way.

HTTP 2.0 is also going to be important for the future, bringing the promise of a decreasing need for concatenation, inlined images or styles. With push support, the server could know about dependencies being requested and smartly push dependencies when you require a specific element to be imported.

The web is slowly growing up and each step we take towards lowering complexity is ultimately a good thing. Even if rebuilding your application using the new and shiny isn’t an option just yet, at minimum continue to design your current path using reusability and composability in mind. This will make a transition in the future, when you are ready, a more pleasant experience.

Where to go from here

Eric Bidelman, Rob Dodson and other pioneers have authored some fantastic 101 articles about the underlying technologies that form Web Components worth reading. The community have also begun fleshing out best practice ideas around element authorship which serve as a good sanity check for components written with and without Web Components.

With special thanks to Dimitri Glazkov, Dominic Cooney, Alex Russell, Dave Herman, Yehuda Katz and the countless others who are helping us get a saner platform for tomorrow. Thanks also go to Sindre and Pascal for their reviews of this article.