---
layout: post
title: "TUM AI Lecture Series - The 3D Gaussian Splatting Adventure: Past, Present, Futur (George Drettakis)"
date: 2025-06-01 00:00:01
categories: podcast
tags: [podcast_script]
---


[TUM AI Lecture Series - The 3D Gaussian Splatting Adventure: Past, Present, Futur (George Drettakis)](https://www.youtube.com/watch?v=DjOqkVIlEGY)

Okay, so welcome everybody. Today is our first hybrid session of the TOI lecture series, and it's a real pleasure to have George Drais here today. 

I mean, you can roughly think about what the talk is going to be about. There will be some cautions today, but I also want to highlight that George has been known in the graphics community actually for a really long time. He's been leading the rendering field for quite some time. He also had some incredible interdisciplinary works, and aside from his academic works, I think we should also give him a lot of credit for basically running a lot of conferences. He's been heavily involved in SIGGRAPH, Eurographics, EGS, and many more. Without these contributions, these things would not have happened.

Probably the most seminal research paper in the last few years came out of his group: caution splatting work. I think it is fair to say that it has not only changed computer graphics and how we think about it, but it has actually changed the entirety of machine learning and computer vision. Pretty much anybody who looks at images and reconstructions is affected because everything is a little bit of caution. 

So, George is leading a group at INRIA since I think the beginning of the 2000s. He has been at the forefront there, mostly working on SIGGRAPH papers. We are super happy to have him here today, and hopefully, he can let us know how we progress in the future of caution as well. 

Thanks so much, George, for being here. Thank you, Matias, and thanks for the invitation to give this talk. The first disclaimer is I'm a rendering guy, and this vision and learning stuff I just try and use as much as I can. 

Anyway, as Matias said, I'm going to be talking about gash and splatting. It's a talk I've given quite a few times now, and it tries to show where all this came from. I very often get the reaction, "Oh, gash splatting came out of nowhere," and my reaction is, "Well, not really." It's 20 years of research, and I'm going to try and present how it all happened. There's going to be quite a bit of history. 

First of all, I need to sort of present what my goal in research is. At a high level, I've always wanted to generate realistic 3D environments allowing real-time navigation in 3D. This is a typical path-traced animation that you can get, and this is the kind of stuff that I worked on for a very long time at the beginning of my career. 

If you think about traditional image synthesis, you start—I'm going to try and do this with the laser pointer for remote viewers. You start with a virtual scene, then you have a camera, and then you get an image through the projection. This is traditional computer graphics. 

Then what do you do with that? How do traditional pipelines work? Artists will typically work very hard to create the geometry, which is triangles. They'll assign material models; there'll be wood on the table, marble on the floor, and so on. Then you need to place your lights and your camera. The camera is placed in the scene, and the lights come from the room next door. Then you need to do accurate light transport, which is illustrated with this little animation that shows how path tracing works, where you cast rays from the camera, and you need to find the light.
in the and this allows you to get the animations that we were talking about. So the elephant in the room here is how can we actually create these 3D scenes? My interest in everything that we did and I'm going to be talking about in this talk is really based on that. I'm not a computer vision guy; I just wanted to get good scenes for graphics. That's my main motivation. 

A little note because it's going to come up a lot, I guess in this audience. It's not necessary, but some other people often wonder, so I'm going to talk a lot about meshes, which we don't use much anymore. But it's important to remember that we usually talk about meshes because they provide normals which sometimes are important. 

At a high level, I want to generate these realistic 3D environments, and my main motivation, as I said, is to create content for graphics. The second motivation is once you have that content, I want to be able to do real-time realistic and immediate rendering and avoid the global illumination computation if possible. 

So in the rest of the talk, I'm going to be talking about how, over many years of research, we worked on the specific solution to this problem which is to capture a 3D scene from video or photos to allow free viewpoint navigation. As we'll see throughout the talk, this has changed names many times. These days we typically call this novel view synthesis, so that it encompasses the various options that you have. 

Going back to the diagram we had before in computer vision, you have sort of an equivalent: you start with a real scene, then you have to estimate the poses of your cameras, and you get an approximate geometry. We can put all of it together in this ideal world, and if you had perfect computer vision, then you would have a perfect virtual scene and you could start doing rendering by placing virtual cameras and moving around. 

So that's very nice in theory, but in practice the geometry from vision is approximate, and you don't have any materials or they're very hard to get. In the very old days, we called novel view synthesis image-based rendering, and we would take these calibrated cameras and the approximate geometry and use the geometry as a proxy. We would reproject the pixels from the images into the novel view from various images, and then you would need to blend to get the result. 

This kind of leads me to the distant past, and it's kind of ancient history where it all started. In the very beginning, there was this image-based modeling and rendering work, and many people contributed to it, but I think the most notable is the work by Paul Debevec. At this time, this was 1997. You could calibrate cameras, but you had to click on six points on each image so that you can actually get the calibration to work. 

So it's kind of a bit of work, right? And once you did that, Paul showed that you could also click in the images and create these triangles, and then you could reproject the input views onto the geometry and get a pretty impressive result for 1997. Around the same time, this was the big golden age of point-based rendering. Many people again worked on it, but that was one of the nicest examples, and I think it made a big splash at the time because Mark Lavoy had a sabbatical, and he spent it in Italy. 

They managed to get the authorization to scan all these big artifacts in Florence, and they came up with this. The problem at the time was rendering millions of points was very...
Hard right, the hardware didn't allow it. They came up with this point-based solution which was hierarchical and it allowed us interactive viewing of point clouds, which was a big deal at the time. The Point Brothers, I really feel that I have to give them the credit they deserve, were Hans Peter Fister, Mattias Vicker, and Mark Pary. We called them the Point Brothers who worked with Marcus Gross at ETH. They really developed the first work on Surfaces and Surface Elements which were the basis of point-based rendering.

PointShop 3D was a system that was available for download and it really influenced the field. We'll come back to work by Matias Scker later. Inspired by this, in the very early 2000s, we worked on point-based rendering, and we were interested in using it to do things like moving geometry. At that time, we were dealing with very complex scenes and complex geometry. It was interesting because these were the days of the very first Nvidia GPUs. The first Nvidia GPUs came out in 1999 and it made a huge difference when I moved to Sofia, as Matia said, in 2000. A Silicon Graphics machine cost €30,000 and it wasn't very good. 

Then these Nvidia chips came out for 600 bucks. You could put them in the tech, which was good except that it crashed every two hours. The first G-Forces were not a lot of fun to work with, but they did allow us to advance a lot. Similarly, around this time, we were looking at image-based rendering, and in particular, we were interested in capturing things like trees. To do that, we basically took pictures and you'll notice our alpha mask with a big sheet behind the trees, which was the only way to do it. 

We had a volumetric representation and we projected the colors onto the volume to get half decent image-based rendering of these trees. These ideas were there over 20 years ago. This paper I had actually forgotten about, and when I started giving this talk, I realized that at the time Pier Puran was visiting on a sabbatical. He said, "You have this point-based rendering; I have this calibrated image thing. We can put it together." 

Using a very brute-force approach, you could do essentially point-based image-based rendering. At the time, of course, it was very simple; all the components that we needed to get high quality were missing, but the grain of the ideas was there. Fast forward to 2007, the problem was, as I said, all the steps before were manual. You had to click on all these images to get the calibration, click again to get the models. It wasn't very practical, so I kind of worked on other stuff until 2009. 

Then Director for Motion came out and Muelled You Stereo kind of about the same time. These are two examples; I mean a lot of people worked on it. Just to give you an idea of the kind of results you got at the time, this is a little animation. This is just 10 photographs. Structure for motion can give you the poses with high quality, but you'll notice that the geometry sometimes has things that are missing. Sometimes there are bits that are a bit too much geometry, and this is the kind of result that you got from multi-stereo. 

You also get the structure from motion point cloud, which is a very sparse set of points, which, as we'll see, proves to be useful in the future. It was a major breakthrough; suddenly we didn't have to click anymore. We could take these images and...
automatically we had the cameras we had a bit of geometry. We even had these measures which were not great or perfect, but they gave you a basis on which you could work. We built on this, so this was the work with my PhD student G Tasia.

Forgive the terrible camera motion; we fix that later, but the idea was that we used the four closest images to the view, and then we would use a warp that is as rigid as possible to project them and get the blending result. We were very proud of this because this is an illustration of where the novel view is—the little red camera—and you can see that we were going quite far away from the input views. This was not very frequent at the time, but still, there were issues which were problematic.

The interesting thing was the fact that we were using the information from the input views, and per view information is critical because it allows us to compensate for the errors in the underlying geometry that I mentioned in the illustration from M. So this was in 2013.

Deep learning and neural networks started to appear in 2014. The blending step that you need to do with all these images can be seen as a filter. Everybody could see that neural networks were learning filters very well. So with Peter Hman and Gabriel Brto, we decided to try and learn the blending weights in this project called Deep Blending. There were several steps to this. First, we had to create per-view meshes, so we're still using per-view information.

Then basically what you would do is train a network to learn the weights. The weights are on the right, and then you can just blend the reprojected input views to get very high-quality image-based rendering and what we now call novel view synthesis. If you compare this to the standard unstructured blurring graph, which was the very basic reprojection onto the existing geometry, you can see that we've eliminated a lot of the artifacts that you can see on the left, both from the improved per-view information and, most importantly, from the blending, which allows the learned blending that enables you to get very good quality.

For me, this was an eye-opener. There's this new method—the deep learning stuff—it can really solve the very hard problem, and it was critical because it was relatively early. The graphics people in 2017 weren't paying much attention to deep learning, and it really opened my eyes to the idea that it is a very powerful methodology.

As the years around that time progressed, we continued working on pretty complex systems. It allows us to get very decent novel view synthesis results, and the team also worked on things like Deferred Neural Shading, where you could actually achieve very good quality novel view synthesis.

There was this momentum that learning methods allowed novel view synthesis to be done very well. But the critical point was when people said, "Aha, maybe I shouldn't be doing this reprojection stuff with the geometry. I should just be learning a representation." Instead of projecting the images onto the geometry, you should just learn the representation and then query it in the novel view to do novel view synthesis.

This sort of approach became possible because of several components. The most important one is differentiable rendering, as we want to optimize based on the input images, and the loss is typically the difference between a rendered image and...
the input but the problem was that to do this we had to have a differentiable rendering algorithm through which we could propagate the gradients. The problem with most rendering algorithms, everything we were doing until now, was that we were using meshes. Meshes have edges; edges are hard and they don't help in the optimization. They create discontinuities, so we were kind of stuck. 

But at that time, Nerf happened, and you're all familiar, I assume, with Neural Radiance Fields. The basic idea is that you have an algorithm that does ray marching. It takes a ray from each pixel of the input image and then evaluates a neural network at these samples. You have a neural network that takes XYZ as input and a viewing direction, and then it produces output color and density as a proxy for geometry. Density has very nice properties because it's soft, and it addresses this problem of the hard edges in meshes and allows optimization to work very well. 

This kind of reminds us a little bit of the volumetric approach that we had worked on. The quality, of course, of Nerf was astounding; we had never seen novel synthesis with this level of quality. Although it was still kind of slow, as a graphics person, my reaction to Nerf was: why would you want to ray march your volume when in the end you have surfaces? It kind of doesn't make sense. The other question was, are neural networks really worth it? I'm not saying this is the correct motivation to have, but it was motivation for me to try and find alternatives. 

This kind of moves us on to the recent past, where I'm going to talk a little bit about how we went for some splatting and learning. It was about the time when I got my first ERC Advanced Grant, and it's very important because it allowed me an environment where I was free to hire, get equipment, and basically have research which was unconstrained. That was very important at the time. 

The proposal of Fun Graph was to deal with uncertainty in capture and rendering. It turns out that in practice we exploited deep learning to deal with the uncertainty in the capture and the rendering, and we developed a bunch of solutions for several aspects of new view synthesis that I'm talking about today, but also relighting and material estimation. The goal at this stage was to move from mesh-based rendering to different optimized representations. 

We wanted differentiable rendering; we wanted to remove multiple view synthesis, multiple stereo, and meshes because they're inaccurate and they're hard to optimize. When you start from meshes, you're stuck with them. It's very hard to get rid of the errors that you have in the mesh. If there are things missing, it's hard to create them, as I showed in the previous example. If there's too much, it's hard to get rid of it. 

We wanted rendering to be fast, so no ray marching, please, and to exploit the power of the massively parallel GPU realization. You have to understand that even this part was a long process; it didn't happen overnight. Now it sounds like a very coherent story, but it was a lot of random choices that happened in between to work out the details. 

At this stage, George Capanas started his PhD, and he comes to me with Thomas and says, "Well, instead of doing ray marching, why don't we use points?" My reaction was, "Are you serious? We did points 10 years ago. It doesn't work."
Right, so thankfully I was clever enough to say, well, let's give it a try. Basically, George actually worked on the PhD, and we'll see how this actually worked out. So we went back to the work by Matias Stricker in surface splatting and we looked at Splat. The term Splat corresponds to an oriented point on a surface, which you see here with the normals that represent the surface in a certain way. Then you use a Gaussian reconstruction kernel to project them onto the screen.

Again, it's kind of related vaguely to the point-based stuff we did a long time ago. The critical thing is that in the original formulation, Splat requires normals for initialization, and we typically obtain these from a mesh. In the beginning, we were stuck with using the meshes from Multia, as we'll see for the first two projects. 

So what are the important properties? The first one is that as you get closer, the Splats become bigger. Even though you're point sampling a surface, you avoid holes that could happen in typical point-based rendering. The second thing is slanted normals appear like ellipses, which allows us to better create edges. This is an important property, and most importantly, each sample can be processed independently, which is great for massive GPU parallelism. 

So what about differentiability? Yet again, ETH came to the rescue. Yan, U, and Allan's colleagues worked on this differentiable surface planning in the context of geometry, like point sampling a surface. But they built this end-to-end differentiable solution. George, in his thesis, had to extend it to handle image-based optimization and high-quality reconstruction. 

In the original formulation, the splatting process assumes that we're working with the surface, so doing a weighted average of the colors works well. However, we also have to deal with these points that are behind because we don't really know where the surface is. That's the whole point; we're trying to find where the surface is. So we adopted a simple, traditional alpha blending strategy, which is good, but we also needed to add an extra term, which is opacity. This allows us to make points disappear if opacity goes to zero; the point goes away, or you can make it go away anyway.

It turns out that this formulation is very close to the image formation model of NeRF. Now, it's not exactly the same, and we have a paper coming up at Eurographics that analyzes the difference. It took us a year and a half to figure out all the differences exactly, but there is a fundamental difference between opacity, which is a constant at each primitive, and density, which varies inside a primitive. It's important to keep that in mind.

Going back to George's PhD, the first steps which actually led to Gaussian splatting were the first two papers. The first one is this point-based neural rendering for per-view optimization. Again, the goal was to have casually captured images and allow novel view synthesis far away from the input images. 

How do we do this? We still keep information from the input views. We basically convert the pixels into 3D points using the multi-stereo geometry, and then we can lift them to 3D, reproject them to the novel view, and create a set of rasterized point clouds. At this point, we said we can use a neural network and learn to...
generate the final image and we can back propagate all the properties to optimize, for example, the positions of the points. That was sort of the first case where we were able to overcome this limitation we had before, which is we were stuck with bad geometry. We could actually start fixing the geometry and fixing the appearance. That method had a number of points which I won't go into in terms of rasterization.

The formulation of the differentiable splatting had one direction. We had to add the direction from the input view to the surface back to the novel view. So it added just an extra Jacobian, and we had this differentiable rization. The other thing is that we had these perview features, and this is sort of an illustration of the optimization of the features over time. It'll wrap around, so when it becomes gray again, you'll see that it's blurry, and it slowly becomes sharper in the image. 

So we had a six-channel feature vector extending RGB color, and we also optimized depth, normal, and this uncertainty. This allowed us to handle some of the artifacts that we had, and compared to deep blending, which was state-of-the-Y of the time, we were clearly doing a lot better in the regions like the chair or the table, both in terms of quality of texture and the vegetation in particular. We were very happy with the sharp results that we were getting from the vegetation at the time.

Standard Nerf didn't work. Nerf Plus+ is this sad story of a paper that was never published because MyIP Nerf came out afterwards. But it was the only Nerf-like method that at the time could handle our scenes. Obviously, we can see that we're doing even better than them, but the rendering times were in minutes for Nerf at the time.

In terms of this first project in DRG's PhD, we managed to correct some of the MVS mesh errors, but we still need MVS meshes as input as well as preview information. We used rization in a differentiable renderer, and the CNN we use produces high-quality results. That's something that we observed in many projects where we used, like in the project I showed before. We were doing novel view synthesis. You can get very good quality results, but it's prone to flickering when you're in motion, and the optimization was very slow—18 to 20 hours—and so was rendering. 

Even though we were at 5 frames a second, which was an order of magnitude faster than Nerf, it's still not really interactive. The next project was a kind of niche project, but I'll talk about it because it did actually advance us quite a lot. It shows how working on something that isn't necessarily directly related can advance you quite a bit. 

The idea was to do essentially mirror-like surfaces with novel view synthesis. Here, the novelties were the fact that we used point clouds in world space. We got rid of the perview information. You may wonder what's the big deal with perview information. The problem is if you need to keep perview information around to do rendering, you're limited because after 150 images, it doesn't fit in G on the GPU anymore. 

So if you want to do really large scenes, you can't keep the curv information around. Again, this is one of those kind of accident moments. So George said, "Well, let me just try to optimize the point cloud without using the perview information," and it worked. That's the kind of thing that can lead to unexpected advancements.
allowed us this is why this project really allowed us to move forward. We had a neural war field for the reflections, which isn't really relevant here. We were still using rasterization and some compositing, and we replaced the neural renderer with an MLP, which turned out to work just as well and didn't have the flickering issue. If we compare to MIP Nerf, we can see that we had much higher quality overall and much sharper reflections at the time.

So, as I said, first important thing: no perview information. That was very important. The second point, which again led to GAN splatting, was that we needed to add points, especially for the reflections, because we had multi-stereo for the diffuse part. However, we had to come up with a strategy to add points for the reflected part, and that helped us start thinking about what to do. The gradient-based approach we had for rasterization kind of solved the flickering thing, but it was still slow. 

I remember having lots of discussions with George and Thomas, saying it doesn't make sense; it's rasterization, it should be faster, and we just didn't have the expertise to do it. We still needed multi-stereo meshes because we needed the normals to initialize. An interesting little piece of information is that we actually did, at some point, try 3D options, but the turnaround time was 18 hours. We tried for a week; we had like five shots, and it didn't work, so we gave up. 

That's a sort of interesting little detail, but it is important. That leads us to, well, it's more like 20 months now, but the present in the GAN splatting and the big addition to the team was Bernard, who knocked on my door saying, can you come do a postl? After looking at it, I said, oh, a guy who knows how to do very fast point rendering on the GPU; that might be useful. It did turn out to be the case.

The goals were to remove all the multi-ston meion stuff, extend 2D surfaces to an efficient and effective 3D representation, so 3D Gaussian. It wasn't a major goal, but if we could remove the neural networks, then we preferred to do that. We wanted it to be fast, efficient, and accurate. I mean, you're all familiar with the kind of results that we get, but still, I mean, this is just a little preview.

So, the extension was relatively easy from the 2D circles. You had positions, normals, standard deviation, opacity, and appearance. There was almost a direct mapping where the covariance matrix replaces the normal, and we had the same opacity term, which we kept. We decided to try spherical harmonics just for performance compared to an MLP.

Again, the initialization can be either from the SFM points or random, although random works a little bit less. We got rid of normals and started with isotropic Gaussian, so the Gaussians are just spheres right in the beginning. When this started working, we realized that the big force was the anisotropy. With the anisotropic regions, we could actually get all these intricate things that we weren't able to do before, and that was a big plus.

These are like SFM points for this scene, then the ellipsoid visualized with the viewer and the splatting solution that you get at the end. So, how do we render? This is where Bernard brought his expertise. The render we had was great, but we were doing per-pixel sorting.
essentially the GPU was just sitting around doing nothing and Bernard said but yeah we can sorting no problem I can sort I don't know six million points in I don't know how many five milliseconds and we were like okay that sounds good.

Now it's approximate there are things that you have to do to deal with it but you do get away with you can actually do this very very quickly. Then there's the splatting that's basically we use Z's approach to Splat to the screen with an approximation and then blending using Alpha compositing. So to get this speed up, as I said, the first thing well there's sorting but there's also tiling. 

So the second part was cutting the screen into 16 x 16 tiles which helps threads work collaboratively and as I said the single global sort which makes it really really fast and the optimization. So we optimize all the properties, opacity, position, Co Varian veral harmonics for color. We use all the Deep learning Machinery, right? 

So yes, it's not technically a deep learning method but we use pytorch, we use SGD with Adam and so on. If we didn't have the machine learning tools, we would never have been able to do it and that's important to keep in mind because I get a lot of people saying yeah but you got rid of machine learning. I don't know about that and of course there's the L1 era and the L Pips. 

So the naive optimization, if you do nothing and you just start with the SFM points it looks okay, but when you look at the details you can see that stuff is missing. So you need to add more primitives to get the perimeters to be in the right place and the way we did that is just with the high positional gradients which we interpreted as being a region that isn't well reconstructed. It's a heuristic, it is what it is, it works relatively well and you add the points in this region by either splitting or cloning and I mean this is just a little illustration of the optimization process. 

So the evaluation was another point which was important and from the outset we really felt that it was important to evaluate on several different data sets. Again, as a methodological aspect, I think it's very important to do that. You shouldn't stick to one data set because you overfit inevitably. If you can make your method work on a variety of data sets that have different properties, the likelihood that it's going to be robust is much higher and this is what we did. 

I mean the Deep blending scenes I guess it was because we liked them, but as you can see, and I mean this is stuff most of you know, we were pretty close to murf 360 in PSNR even better in SSIM. But the big differences in speed, so in terms of frames per second and in terms of compute time. We clearly could get the same quality in 40 minutes instead of 48 hours and that was a very big advantage. 

But incidentally, GP basically with seven, seven and a half minutes could get pretty decent quality. So we said fine let's stop our training at about the same time as instant NGP and see what happens. We can see that we're still very competitive and especially in rendering time, which of course with fewer primitives is higher. But the big difference is that instant NGP has plateaued; it just won't get any better if you continue computing while our method you go from the 7 minutes to the 40 minutes and you...
Get the quality you need. The downside, of course, was memory consumption, which, well, it was what it was at the time. I'll talk about that a little bit later.

I mean, I like showing these two slides to politicians to say, well, there's Google, and look how much better we're doing, and then there's Nvidia, and look at how much better we're doing. The thing is, they get it right, so it's a good thing to do.

And then, yeah, there's another example of the kind of thing that our method is very good at, especially from views which are completely novel views in the sense that they're not interpolation, but they're within the convex hull of the input views. We don't really do very good extrapolation outside of the convex hull, but within it, we're pretty good if the capture is dense enough. Isotropy was very important; this is the ablation we can see that if we don't have isotropy, it still does something half decent, but it misses all the features that you would like to have.

So, I think, globally speaking, 3D G splatting found a very nice sweet spot between volumetric rendering with the opacity and the alpha blending, but maintaining the standard traditional rasterization using splats and all the advantages that come with GPU performance and so on. We got excellent results in speed and quality; that's very rare. Typically, you're really happy if you get one or the other, right? You can say, oh, my method is better in speed even though the quality isn't great, or the way around. So, we were really happy with that result, and it greatly accelerated training and rendering. That's my little contribution to reducing consumption of electricity.

And then, in terms of neural networks, well, as I said, for me, it's not a religious thing. It may be the case that in some cases, a small MLP is a good solution, but this allows us to have a completely interpretable 3D representation. The memory was still high, so uptick Splatting has been used in all sorts of graphics engines. We have this dual licensing thing, so if people want to use it for commercial use, they actually have to buy a license, and many companies did. It's being used in e-commerce, high-end visual effects, 3D content creation, virtual reality, online social networks, telecommunications.

Unfortunately, I can't cite the companies that have actually bought it, except for the ones that authorized us to do it, and one of them is Infinite Realities. This is a multicamera capture, right? So, they're basically creating a GAN Splat per frame, but the quality is just mind-blowing. When you see these things, you go, wow, that's pretty crazy.

There's been hundreds of follow-up papers, which I haven't been able to follow. Improvement in memory, I'll talk a little bit about that. Multiple solutions for animated scenes—the stuff you guys have been doing, which is great—generative models, and so on and so forth. Real-time SLAM, I've been following a little bit the medical research stuff, which looks actually pretty interesting.

Recently, over the last year, we had one of the many memory reduction solutions. We had basically a 25 times memory reduction. I think the most recent one is 100 times compared to the HV Plus+ whatever, and we started working on treating very large scenes, which was the Sura paper last.
year so there are challenges right if you want to fit this is a 22,000 image capture of our campus and it doesn't really fit into 96,000. This is a 44,000 image capture of n it was I took. I don't have the picture with the helmet but we have this helmet with the five GoPros and I biked around these for an hour and I just got tired of biking around but we could have kept on going.

So the idea is very simple. You take do a scene subdivision that you divide into chunks. You then do an optimization per chunk and you consolidate it to have a hierarchy. You have a hierarchy cut approach so you take the cut in the hierarchy according to the speed that you want to achieve. This is illustrated here. At the lower level, if you take a cut at the very lowest level, you get about 40 frames per second and you get a nice quality but you can then take a cut higher up in the hierarchy and get up to 70 frames a second and the quality gets worse. Obviously, on a regular basis you do this for the distant part of the scene and this is just an illustration of my bike ride through nce.

I think this is the back camera actually looking in the direction of the back camera but this is something I've been dreaming of doing for years, right? Being able to capture City scale data and actually be able to walk around and use it. I mean it's not perfect; there are lots of things that are wrong with it but it does get there. The biggest challenge for this data is not the optimization; it's the callup. Right callup just doesn't really work.

So in the paper, we have a method that does something but it's far from perfect, so it just keeps on going. This brings me to the future. I was lucky enough to get a second ERC grant that just started in December and the story I sold is that we want to develop a new 3DC representation and companion rendering algorithms.

The goal is to be able to generate 3D digital assets that are compatible with physically based rendering so we can use physically based rendering parameters but have the power of generative neural rendering and neural rendering in general. We want to be able—ultimately I’m not even sure we’re going to be able to do this in five years—to provide such content with guarantees on accuracy, including in the generative case. Especially that I doubt it, but we’ll try.

To give a more concrete idea of the kind of thing we want to look at, I'll just talk about two papers that we had last year. The first one is a relighting approach. We want to be able to relight region splatting and the idea is that to do that, it's a very ambiguous problem. You need to have priors and we want to use diffusion large diffusion models as a prior.

The intuition is that diffusion models can synthesize extremely realistic images and they can be fine-tuned at a lower cost. We're not able, of course, to train a foundation model but we can run a control net and it can be conditioned on various inputs. The control net showed examples like depth and so on.

We use this dataset that had been built quite a long time ago and it never really got much attention but it's something like—I can't remember how many scenes—100 or more than 100 scenes where you have a relatively complex real environment and they have this motorized flash which takes 25 different lightings of the same.
Scene so it's a real data and it's high quality data and they have these nice two balls. They have a chrome ball and this Noto Chrome ball which actually has a highlight on it, and that was extremely useful because we actually estimated the direction of the light using that. 

Then basically the method has two stages. The first stage is we train the control net on this data to be able to relight an image into 18 different lighting conditions conditioned on the light direction. So even though you just taken your standard Radiance field data set, now you have a multi-illumination version of that data set just using control net. 

Then we use an idea that has been used many times before, especially in Nerf W, where you actually have a little MLP that replaces the spherical harmonics which is conditioned on lighting direction as well. As a result, you can actually change. So this was taken under one single lighting, but you can change, you can move the light and you can see the motion of the light illustrated in the little ball there. You can see that it's very convincing; right, it looks very realistic. 

The highlights move continuously, and since it's in a latent space, it's very smooth. The shadows do something which is kind of they're soft, but they do move, and they do move convincingly. The problem is that it is visually convincing; there's this vague notion of lighting direction, but there's no true physically based control. We didn't have time to do a study in detail, but we did some studies with ground truth synthetic data and it looks okay. But a detailed study of the placement of the shadows we didn't do, and I'm pretty sure it's not exactly where it should be. 

Another example was a slightly more complicated case where we used Styan EG 3D to generate images, and we used the physically based shaping model. This allows us to have the generative aspect, so we can change the shape of the car, but the reflections are done with a physically based model using an environment map, which gives us some level of physical control. 

We can keep the powerful generative capacity, but it's not very accurate; there's no error control, and there's only an approximate notion of materials. But it is a first step in the right direction. The challenges are that general representations are unsuitable. Either they're good for rendering, like the standard physically based rendering approaches, or they're good for optimization like A and splatting. 

But we still don't have a representation that's good for both. My goal is to come up with ways of doing that and find designing fast, accurate, and differentiable renderers that can do this, which is a very hard task. The hope is that once you have these two components, getting generative models that are controllable will be easier. 

To conclude, when I look back, novel use synthesis is now usable in many applications. It took more than 20 years, but I don't think it's completely solved. It's fair to say that it's pretty close to being solved, and that is something which is very satisfying to see that we were able to get there. 

But the goal of allowing fast and easy 3D content creation still needs a huge amount of work. This is just a list of some of the problems. There are lots of others, so we're still stuck with the SFM step; it's still slow.
Inaccurate and the optimization is still not fast enough even though there are many very interesting methods like the Alm approach that you guys have developed. Relighting and editing still needs a lot of work and potentially it requires extracting physically based rendering representations or inventing new representations that allow both and then that would require that will allow us to make everything work together in the most convenient way.

So in terms of take-home lessons, I think the first thing is to be very careful about how you choose your research topics and how you go forward. I think it's very important to carefully balance adopting these powerful new tools while avoiding to just jump onto the trendy wagon. It's different, and I'm not saying I know how to do this very well, but the example that we did by not going Ray marching and Nerf while saying okay this SGD based optimization is a good idea allowed us to get to the point that we did. 

It's important to exploit your strengths. What could we do in this space? Well, we had a lot of core graphics knowledge. We understood rasterization; we knew we could go faster. It's just finding the right people to do that. 

Then the other thing is this: I mentioned this before. We had actually tried 3D Gion splats, but we were at 18 hours per optimization, so we couldn't get it to work. There's this difficult choice about should I spend time optimizing first or not. Again, you should look at what the potential benefits are. It's not easy to make these decisions, but you can advance quickly and leave optimizations for later, or you can optimize now and advance even faster. That's what happened with the Gashi and splatting. Basically, we were at 18 hours in September, and in early December, we were at 10 minutes. 

That was what that's burned, right? I really remember those meetings every week. It was like time 2, time 5, time 10, and like, oh this week I only got times two. Okay, we'll take it. 

The other thing is it's very important to acknowledge your errors. As I said, I almost stopped the point-based rendering thing, right? I mean, that was not a good idea, and it's important to recognize them and acknowledge them. I think fixing them makes you stronger. The flexibility of the funding is of course very important. I didn't have to worry about run proposals; I could just hire people. Burnout knocks on my door; you can start tomorrow. 

Then I like working with small flexible teams. That's just a personal preference, but most important of all, and this is the last thing I want to say, you have to have fun. If you're not having fun, you can't do good research. For me, it's absolutely necessary, and that's it. Thank you very much. 

Cool, awesome, fantastic talk. We have time for some questions. Geor, I would ask you to repeat the questions. Maybe? Sure, I'll do that, and I'm not trying to p microphone set up right now.

Thanks for the insight into where you are now. I would like to hear your take on the discussion of explicit versus implicit SE representations because we now have this explicit representation which is of course fast like MCH rendering and point renderings. But there's always this problem for generative tasks that if you have an explicit discrete number of primitives...
That you need to generate this is very hard as an optimization target. It's hard to learn not numeric differentiability, and while for implicit representations you can arbitrarily generate geometry and withdraw it, I would like to hear your thoughts on whether we just stick to explicit representations now because they're so fast. In the end, that's what matters more, so you can train larger models from larger datasets, or do we need something else that at some point is more flexible in terms of geometry but is much faster?

I'm not an expert on generative models by any stretch of the imagination, so I can't answer definitively. But I think it's the same with everything, right? It depends on what you're trying to do. I think explicit representations happen to be very good for novel synthesis, so for me, that's a clear win.

Effectively, I think the problems from what people tell me about the generative models are something slightly different might be necessary. From what I've seen, most people use some kind of grid structure, even if they're using regions in the end for the generation. Whether there's a way to keep the benefits of both, some people are working on things like this. There was this archive paper which I think tries to bridge the two approaches.

I think there are people who are looking into things like this, but I mean, I don't have a definitive answer. I think the short story is that it's very important to be open-minded. If you need implicit representations and there's a good reason for it, there's no reason to shut it down. But then you just need to trade that off, see what the tradeoff is in terms of quality versus speed and flexibility versus speed.

Maybe I have one question too. If you're talking about future graphics like rendering pipelines, where do meshes fit in if everything is a splat? I need to know where you stand on this one. I need to repeat the question, so Matas is asking where do meshes fit into the future, essentially if everything is a splat?

I don't think everything is a splat. Right? I mean, I'm of course extremely happy with the success that Gaffin Splat has had, but I actually think that in many cases, meshes and splats are not the right representation for the task we want to do. Right? So meshes have inertia in their favor. There’s this huge pipeline and workflows that use meshes, and they include many important things like games, physically-based rendering, all those things that right now we don't know how to do with GAN splats. It's not clear to me that GAN splats are the right representation for this case, so I think meshes still have a pretty bright future, to be honest.

How they fit into that remains to be seen. Part of the proposal for my new ERC is to look at new representations that can get the best of both worlds. If at some point you want to get rid of meshes, you need to have a representation that's going to allow you to do all the things you do with meshes today. For physically-based rendering, that essentially means to be able to cast an array, and if we can do that with some other representation, I'm very interested.
In looking into how to do that, but do I know? No, I have no idea how to do that right today. So until that sort of thing happens, I think it's I think meses still have a pretty bright future.

Are you getting questions online as well? No, I don't have one yet, but if somebody has a question online, I need your opinion for physically. So what's your opinion?

Better the rendering formation. The BF should be improved, or rather the gap between rendering and really phistic images could be closed. So the question is, I get it right, is whether we can continue using BRDFs and use the physically based rendering or somehow use some alternative which would just directly produce a physically based, this a physically accurate image more or less. That's what you're saying, yes?

That's an interesting question. BRDFs come from physics originally, right? So they are based on people who know what they're talking about in terms of measuring surfaces and they do correspond to a physics-based reality. So in any application where you're going to need that, you need that kind of model. If you want to do…I mean the last item on my wish list for the new project is to have error control and error bounds. It's hard to see how you can do that without using physics-based models. 

So for that kind of application, I think you do need to stick to at least some form of physics-informed or physics-based models for anything that is just concerned with visual appearance or even visual accuracy, but just visuals, right? So no measurement; it's much more questionable. I mean, it's much more questionable whether you need to go all the way to the physically based approach.

My hope is that using physically based information will actually make it more efficient to do the generative stuff. I might be wrong, but that's sort of the bet at this stage. The idea is that hopefully you can compact things or make more intelligent decisions. There are people who disagree with me. Yosha was visiting last week. He said data can solve it all, right? Why would you ever want to do a physics model, right? He might be right, and I mean his argument was that these neural networks can compact things much better than anything that we can think of. 

I'm not sure. I guess that's the key about how you do research; you need to keep an open mind. So yes, you say, “Okay, this is the direction I'm going to go,” but if you see that it's not working, you need to think about the alternative. So it's very important to keep both in mind.

There was one question online asking for how do you see the progress for dynamic objects? So the question is, how do I see the progress for dynamic? I always get that question. I don't know. I don't do… well, that's not true. I mean, we haven't worked on dynamic objects yet, but we are thinking of it as well.

I have to admit that I cannot keep track of all of the literature, right? Since I'm not working, I haven't been working much in the dynamic field, especially a lot of the work is on humans, and that is definitely an area I don't work on. I don't really have a very strong opinion. I still feel like there hasn't been a good solution yet. Everything I've seen seems to work for some cases but not for others, and I'm not convinced that we found the right solution yet.
One of the things that happened over the last more than a year and a half is that most of the intuitions I had about what to do next were wrong. I think that when you think of the Gaussian, it's really easy to move them. You just need to track the motion of the Gaussians, and it's going to be that easy. A lot of people have tried that with a lot of different tricks. It can work for some cases, but in general it's much harder than you think. I think that is something that requires a different way. 

I think the different kinds of initializations, different kinds of regularizations, different kinds of densification, or just getting rid of densification completely... The work I've seen, I'm not familiar with the details, but where people use something like a simple model and a mesh, and then they stick regions on the mesh, those look very convincing. I mean, the results are amazing, so yeah, I mean I think that's... but it's definitely something that I'm not sure the full dynamic solution will still actually be technically speaking GAN splats. 

But something in that space I think is definitely promising. Of course, when you move the slides from the previous slide to that slide, it wasn't GS; this was just NeRF. This was NeRF. In our models, I think there is a common issue that GS just like points are unstructured. For rendering, when you optimize your scene it's fine because the points just arrange in a way to SC. Sometimes we use some BO preservations; for example, we take a mesh, we take space and space.

So do you have any take on models or you already mentioned? Okay, so the question is if I have a take on GAN reg generative model, which is kind of... the first question is, is this the same issue? I mean, as I said, it's not my area of expertise, so I don't really know much about it. At a high level, it does sound like the fact that it's unstructured or inexplicable.

With some other solution that can get both... I really don't have a strong opinion on that. Just a question. Yes, do you think something... so the question is whether hierarchical representation could be used in the generative context for GS? It's something I have thought of, but it seems to me that... at a very high level, I haven't thought about it in detail; I haven't worked out the details. But it sounds promising. It sounds like one way of dealing with structuring. It's unstructured, but the hierarchy is a structure that you place on top of the basic Point Cloud.

You can imagine coming up with merging strategies that are adapted to generation rather than what we wanted to do, which is just LOD. If you merge GS in a way that is suitable for your generative process, maybe that's a good direction. 

Speaking of the formulation, if you wanted to extend us even further for physical-based attributes, how important is it to model like crisp surfaces? In terms of like... we find that we get really good looking views of a lot of scenes that aren't actually... sometimes they are just surfaces represented. Is that going to be critical for this next step towards physics-based kind of wonder, or is it okay to get away with this kind of...
Notion. 

Surface right, so the question is whether it's important. Correct me if I get it wrong, but whether it's important or how important is it to get very good. Especially in the context of being able to do it with physically based properties, or can we get away with this fuzzy volumetric notion for the next steps? 

I mean, the fuzzy volumetric part is useful for optimization; it's not useful for anything else. There have been many people who have then extracted a mesh, and some of it's getting better and better every time I see a new paper. Measures look better. 

My take on that is that if you're representing a flat table, clearly it would be better to use a mesh. But if you're representing a tree from really far away, it's unclear that meshes are the right way to do it. There are ways to do biometric physically based rendering, so there's no reason why you couldn't do some, and people have actually done it. They have used gigabox and had a follow-up that was a global illumination approach where they used the voxelized version of the scene to do global illumination. You can imagine it was volumetric, so you could imagine using Gaussians to do volumetric path tracing and integrate that into a full path energy solution. 

But, as I was saying before, you need to have this representation where things behave like your surface when they need to. So what that would be is it a mesh, or is it something else? That remains to be seen, but it needs to behave like a mesh when you're doing path tracing, and it needs to behave like a BRDF when you want it to be physically based. 

I think it's important to come up with a way. I think working on extracting meshes is important, whatever happens. But one needs to be mindful and keep in mind that in some cases, it makes more sense than others. 

Okay then, I think I'm sorry that I can't go over all the questions. When you mentioned that we suddenly had a lot of questions on YouTube, unfortunately I think we're a little bit out of time. But we're really happy to have you here; it was really great for the... I guess you're still a little bit around. Really, thanks for the inspiring tour. I think there's going to be a lot of cool, interesting stuff coming in the future as well, and also congrats on all the reasons there. So yeah, thanks so much. Thank you very much, and thanks to everybody coming.

---

> This is an experimental rewrite



<script>window.tocIndex = {
  "index": [
    {
      "index_sentences": "Okay, so welcome everybody. Today is our first hybrid session of the TOI lecture series, and it's a real pleasure to have George Drais here today.",
      "section_level": 1,
      "section_title": "Introduction"
    },
    {
      "index_sentences": "Anyway, as Matias said, I'm going to be talking about gash and splatting. It's a talk I've given quite a few times now, and it tries to show where all this came from.",
      "section_level": 1,
      "section_title": "Gaussian Splatting: Where it Came From"
    },
    {
      "index_sentences": "First of all, I need to sort of present what my goal in research is. At a high level, I've always wanted to generate realistic 3D environments allowing real-time navigation in 3D.",
      "section_level": 2,
      "section_title": "Research Goal"
    },
    {
      "index_sentences": "If you think about traditional image synthesis, you start—I'm going to try and do this with the laser pointer for remote viewers.",
      "section_level": 2,
      "section_title": "Traditional Image Synthesis Pipeline"
    },
    {
      "index_sentences": "So the elephant in the room here is how can we actually create these 3D scenes? My interest in everything that we did and I'm going to be talking about in this talk is really based on that.",
      "section_level": 2,
      "section_title": "The 3D Scene Creation Problem"
    },
    {
      "index_sentences": "A little note because it's going to come up a lot, I guess in this audience. It's not necessary, but some other people often wonder, so I'm going to talk a lot about meshes, which we don't use much anymore.",
      "section_level": 2,
      "section_title": "Note on Meshes"
    },
    {
      "index_sentences": "At a high level, I want to generate these realistic 3D environments, and my main motivation, as I said, is to create content for graphics. The second motivation is once you have that content, I want to be able to do real-time realistic and immediate rendering and avoid the global illumination computation if possible.",
      "section_level": 2,
      "section_title": "Overall Research Goal Summary"
    },
    {
      "index_sentences": "So in the rest of the talk, I'm going to be talking about how, over many years of research, we worked on the specific solution to this problem which is to capture a 3D scene from video or photos to allow free viewpoint navigation.",
      "section_level": 2,
      "section_title": "Approach: Novel View Synthesis"
    },
    {
      "index_sentences": "Going back to the diagram we had before in computer vision, you have sort of an equivalent: you start with a real scene, then you have to estimate the poses of your cameras, and you get an approximate geometry.",
      "section_level": 2,
      "section_title": "CV Equivalent and Image-Based Rendering (IBR)"
    },
    {
      "index_sentences": "This kind of leads me to the distant past, and it's kind of ancient history where it all started. In the very beginning, there was this image-based modeling and rendering work, and many people contributed to it, but I think the most notable is the work by Paul Debevec.",
      "section_level": 2,
      "section_title": "The Distant Past: Ancient History"
    },
    {
      "index_sentences": "Around the same time, this was the big golden age of point-based rendering. Many people again worked on it, but that was one of the nicest examples, and I think it made a big splash at the time because Mark Lavoy had a sabbatical, and he spent it in Italy.",
      "section_level": 2,
      "section_title": "Golden Age of Point-Based Rendering"
    },
    {
      "index_sentences": "Inspired by this, in the very early 2000s, we worked on point-based rendering, and we were interested in using it to do things like moving geometry. At that time, we were dealing with very complex scenes and complex geometry.",
      "section_level": 2,
      "section_title": "Early 2000s Point-Based Rendering Work"
    },
    {
      "index_sentences": "This paper I had actually forgotten about, and when I started giving this talk, I realized that at the time Pier Puran was visiting on a sabbatical. He said, \"You have this point-based rendering; I have this calibrated image thing. We can put it together.\"",
      "section_level": 2,
      "section_title": "Early Point-Based Image-Based Rendering"
    },
    {
      "index_sentences": "Fast forward to 2007, the problem was, as I said, all the steps before were manual. You had to click on all these images to get the calibration, click again to get the models.",
      "section_level": 2,
      "section_title": "Limitations of Manual Methods"
    },
    {
      "index_sentences": "Then Director for Motion came out and Muelled You Stereo kind of about the same time. These are two examples; I mean a lot of people worked on it. Just to give you an idea of the kind of results you got at the time, this is a little animation.",
      "section_level": 2,
      "section_title": "Breakthroughs in Structure-from-Motion (SFM) and Multi-View Stereo (MVS)"
    },
    {
      "index_sentences": "We built on this, so this was the work with my PhD student G Tasia. Forgive the terrible camera motion; we fix that later, but the idea was that we used the four closest images to the view, and then we would use a warp that is as rigid as possible to project them and get the blending result.",
      "section_level": 3,
      "section_title": "Warp-Based IBR Work"
    },
    {
      "index_sentences": "Deep learning and neural networks started to appear in 2014. The blending step that you need to do with all these images can be seen as a filter.",
      "section_level": 3,
      "section_title": "Deep Learning for Blending"
    },
    {
      "index_sentences": "As the years around that time progressed, we continued working on pretty complex systems. It allows us to get very decent novel view synthesis results, and the team also worked on things like Deferred Neural Shading, where you could actually achieve very good quality novel view synthesis.",
      "section_level": 2,
      "section_title": "Continued Work on Complex Systems & Neural Shading"
    },
    {
      "index_sentences": "There was this momentum that learning methods allowed novel view synthesis to be done very well. But the critical point was when people said, \"Aha, maybe I shouldn't be doing this reprojection stuff with the geometry. I should just be learning a representation.\"",
      "section_level": 2,
      "section_title": "Momentum Towards Learned Representations"
    },
    {
      "index_sentences": "This sort of approach became possible because of several components. The most important one is differentiable rendering, as we want to optimize based on the input images, and the loss is typically the difference between a rendered image and...",
      "section_level": 2,
      "section_title": "Enabling Components: Differentiable Rendering"
    },
    {
      "index_sentences": "But at that time, Nerf happened, and you're all familiar, I assume, with Neural Radiance Fields. The basic idea is that you have an algorithm that does ray marching.",
      "section_level": 2,
      "section_title": "The Advent of NeRF"
    },
    {
      "index_sentences": "This kind of reminds us a little bit of the volumetric approach that we had worked on. The quality, of course, of Nerf was astounding; we had never seen novel synthesis with this level of quality.",
      "section_level": 2,
      "section_title": "Reaction to NeRF"
    },
    {
      "index_sentences": "This kind of moves us on to the recent past, where I'm going to talk a little bit about how we went for some splatting and learning. It was about the time when I got my first ERC Advanced Grant, and it's very important because it allowed me an environment where I was free to hire, get equipment, and basically have research which was unconstrained.",
      "section_level": 2,
      "section_title": "The Recent Past & The Road to Gaussian Splatting (ERC Fun Graph)"
    },
    {
      "index_sentences": "The proposal of Fun Graph was to deal with uncertainty in capture and rendering. It turns out that in practice we exploited deep learning to deal with the uncertainty in the capture and the rendering, and we developed a bunch of solutions for several aspects of new view synthesis that I'm talking about today, but also relighting and material estimation.",
      "section_level": 3,
      "section_title": "Fun Graph ERC Proposal"
    },
    {
      "index_sentences": "The goal at this stage was to move from mesh-based rendering to different optimized representations. We wanted differentiable rendering; we wanted to remove multiple view synthesis, multiple stereo, and meshes because they're inaccurate and they're hard to optimize.",
      "section_level": 3,
      "section_title": "Goals: Differentiable Optimized Representations"
    },
    {
      "index_sentences": "At this stage, George Capanas started his PhD, and he comes to me with Thomas and says, \"Well, instead of doing ray marching, why don't we use points?\"",
      "section_level": 3,
      "section_title": "Revisiting Point-Based Rendering"
    },
    {
      "index_sentences": "So we went back to the work by Matias Stricker in surface splatting and we looked at Splat. The term Splat corresponds to an oriented point on a surface, which you see here with the normals that represent the surface in a certain way.",
      "section_level": 3,
      "section_title": "Surface Splatting Basics"
    },
    {
      "index_sentences": "What are the important properties? The first one is that as you get closer, the Splats become bigger. Even though you're point sampling a surface, you avoid holes that could happen in typical point-based rendering.",
      "section_level": 4,
      "section_title": "Important Splat Properties"
    },
    {
      "index_sentences": "So what about differentiability? Yet again, ETH came to the rescue. Yan, U, and Allan's colleagues worked on this differentiable surface planning in the context of geometry, like point sampling a surface.",
      "section_level": 4,
      "section_title": "Differentiability"
    },
    {
      "index_sentences": "In the original formulation, the splatting process assumes that we're working with the surface, so doing a weighted average of the colors works well. However, we also have to deal with these points that are behind because we don't really know where the surface is.",
      "section_level": 4,
      "section_title": "Alpha Blending and Opacity"
    },
    {
      "index_sentences": "It turns out that this formulation is very close to the image formation model of NeRF. Now, it's not exactly the same, and we have a paper coming up at Eurographics that analyzes the difference.",
      "section_level": 4,
      "section_title": "Relation to NeRF Formulation"
    },
    {
      "index_sentences": "Going back to George's PhD, the first steps which actually led to Gaussian splatting were the first two papers. The first one is this point-based neural rendering for per-view optimization.",
      "section_level": 3,
      "section_title": "First Steps in George's PhD"
    },
    {
      "index_sentences": "How do we do this? We still keep information from the input views. We basically convert the pixels into 3D points using the multi-stereo geometry, and then we can lift them to 3D, reproject them to the novel view, and create a set of rasterized point clouds.",
      "section_level": 4,
      "section_title": "Point-Based Neural Rendering Method"
    },
    {
      "index_sentences": "The formulation of the differentiable splatting had one direction. We had to add the direction from the input view to the surface back to the novel view. So it added just an extra Jacobian, and we had this differentiable rization.",
      "section_level": 4,
      "section_title": "Differentiable Rasterization & Per-View Features"
    },
    {
      "index_sentences": "In terms of this first project in DRG's PhD, we managed to correct some of the MVS mesh errors, but we still need MVS meshes as input as well as preview information. We used rization in a differentiable renderer, and the CNN we use produces high-quality results.",
      "section_level": 4,
      "section_title": "Evaluation of First Project"
    },
    {
      "index_sentences": "The next project was a kind of niche project, but I'll talk about it because it did actually advance us quite a lot. It shows how working on something that isn't necessarily directly related can advance you quite a bit.",
      "section_level": 3,
      "section_title": "Second Project: Mirror-like Surfaces"
    },
    {
      "index_sentences": "allowed us this is why this project really allowed us to move forward. We had a neural war field for the reflections, which isn't really relevant here.",
      "section_level": 4,
      "section_title": "Key Advancements from Second Project"
    },
    {
      "index_sentences": "So, as I said, first important thing: no perview information. That was very important. The second point, which again led to GAN splatting, was that we needed to add points, especially for the reflections, because we had multi-stereo for the diffuse part.",
      "section_level": 4,
      "section_title": "Summary of Advancements"
    },
    {
      "index_sentences": "That leads us to, well, it's more like 20 months now, but the present in the GAN splatting and the big addition to the team was Bernard, who knocked on my door saying, can you come do a postl?",
      "section_level": 2,
      "section_title": "3D Gaussian Splatting (The Breakthrough)"
    },
    {
      "index_sentences": "The goals were to remove all the multi-ston meion stuff, extend 2D surfaces to an efficient and effective 3D representation, so 3D Gaussian. It wasn't a major goal, but if we could remove the neural networks, then we preferred to do that.",
      "section_level": 3,
      "section_title": "Gaussian Splatting Goals"
    },
    {
      "index_sentences": "So, the extension was relatively easy from the 2D circles. You had positions, normals, standard deviation, opacity, and appearance. There was almost a direct mapping where the covariance matrix replaces the normal, and we had the same opacity term, which we kept.",
      "section_level": 3,
      "section_title": "3D Gaussian Representation"
    },
    {
      "index_sentences": "How do we render? This is where Bernard brought his expertise. The render we had was great, but we were doing per-pixel sorting.",
      "section_level": 3,
      "section_title": "Rendering Process"
    },
    {
      "index_sentences": "So to get this speed up, as I said, the first thing well there's sorting but there's also tiling. So the second part was cutting the screen into 16 x 16 tiles which helps threads work collaboratively and as I said the single global sort which makes it really really fast and the optimization.",
      "section_level": 4,
      "section_title": "Speed Up Techniques (Sorting & Tiling)"
    },
    {
      "index_sentences": "So we optimize all the properties, opacity, position, Co Varian veral harmonics for color. We use all the Deep learning Machinery, right? So yes, it's not technically a deep learning method but we use pytorch, we use SGD with Adam and so on.",
      "section_level": 3,
      "section_title": "Optimization Process"
    },
    {
      "index_sentences": "So the naive optimization, if you do nothing and you just start with the SFM points it looks okay, but when you look at the details you can see that stuff is missing. So you need to add more primitives to get the perimeters to be in the right place and the way we did that is just with the high positional gradients which we interpreted as being a region that isn't well reconstructed.",
      "section_level": 4,
      "section_title": "Densification Strategy"
    },
    {
      "index_sentences": "The evaluation was another point which was important and from the outset we really felt that it was important to evaluate on several different data sets. Again, as a methodological aspect, I think it's very important to do that.",
      "section_level": 3,
      "section_title": "Evaluation and Results"
    },
    {
      "index_sentences": "I mean, I like showing these two slides to politicians to say, well, there's Google, and look how much better we're doing, and then there's Nvidia, and look at how much better we're doing.",
      "section_level": 4,
      "section_title": "Comparison Anecdote"
    },
    {
      "index_sentences": "And then, yeah, there's another example of the kind of thing that our method is very good at, especially from views which are completely novel views in the sense that they're not interpolation, but they're within the convex hull of the input views.",
      "section_level": 4,
      "section_title": "Novel View Capability"
    },
    {
      "index_sentences": "Isotropy was very important; this is the ablation we can see that if we don't have isotropy, it still does something half decent, but it misses all the features that you would like to have. So, I think, globally speaking, 3D G splatting found a very nice sweet spot between volumetric rendering with the opacity and the alpha blending, but maintaining the standard traditional rasterization using splats and all the advantages that come with GPU performance and so on.",
      "section_level": 4,
      "section_title": "Importance of Anisotropy and Summary of Strengths"
    },
    {
      "index_sentences": "uptick Splatting has been used in all sorts of graphics engines. We have this dual licensing thing, so if people want to use it for commercial use, they actually have to buy a license, and many companies did.",
      "section_level": 3,
      "section_title": "Impact and Adoption"
    },
    {
      "index_sentences": "There's been hundreds of follow-up papers, which I haven't been able to follow. Improvement in memory, I'll talk a little bit about that. Multiple solutions for animated scenes—the stuff you guys have been doing, which is great—generative models, and so on and so forth.",
      "section_level": 3,
      "section_title": "Follow-up Work & Improvements"
    },
    {
      "index_sentences": "Recently, over the last year, we had one of the many memory reduction solutions. We had basically a 25 times memory reduction.",
      "section_level": 3,
      "section_title": "Recent Memory Reduction"
    },
    {
      "index_sentences": "year so there are challenges right if you want to fit this is a 22,000 image capture of our campus and it doesn't really fit into 96,000. This is a 44,000 image capture of n it was I took.",
      "section_level": 3,
      "section_title": "Challenges with Large Scenes"
    },
    {
      "index_sentences": "So the idea is very simple. You take do a scene subdivision that you divide into chunks. You then do an optimization per chunk and you consolidate it to have a hierarchy.",
      "section_level": 3,
      "section_title": "Sura: Scene Subdivision Method for Large Scenes"
    },
    {
      "index_sentences": "I think this is the back camera actually looking in the direction of the back camera but this is something I've been dreaming of doing for years, right? Being able to capture City scale data and actually be able to walk around and use it.",
      "section_level": 3,
      "section_title": "Dream Realized: City Scale Data"
    },
    {
      "index_sentences": "This brings me to the future. I was lucky enough to get a second ERC grant that just started in December and the story I sold is that we want to develop a new 3DC representation and companion rendering algorithms.",
      "section_level": 2,
      "section_title": "Future Work: Second ERC Grant"
    },
    {
      "index_sentences": "The goal is to be able to generate 3D digital assets that are compatible with physically based rendering so we can use physically based rendering parameters but have the power of generative neural rendering and neural rendering in general. We want to be able—ultimately I’m not even sure we’re going to be able to do this in five years—to provide such content with guarantees on accuracy, including in the generative case.",
      "section_level": 3,
      "section_title": "Goal: PBR Compatible Digital Assets"
    },
    {
      "index_sentences": "To give a more concrete idea of the kind of thing we want to look at, I'll just talk about two papers that we had last year. The first one is a relighting approach.",
      "section_level": 3,
      "section_title": "Concrete Ideas: Two Papers from Last Year"
    },
    {
      "index_sentences": "The intuition is that diffusion models can synthesize extremely realistic images and they can be fine-tuned at a lower cost. We're not able, of course, to train a foundation model but we can run a control net and it can be conditioned on various inputs.",
      "section_level": 4,
      "section_title": "Relighting Approach using Diffusion Models"
    },
    {
      "index_sentences": "We use this dataset that had been built quite a long time ago and it never really got much attention but it's something like—I can't remember how many scenes—100 or more than 100 scenes where you have a relatively complex real environment and they have this motorized flash which takes 25 different lightings of the same.",
      "section_level": 4,
      "section_title": "Dataset for Relighting"
    },
    {
      "index_sentences": "Then basically the method has two stages. The first stage is we train the control net on this data to be able to relight an image into 18 different lighting conditions conditioned on the light direction.",
      "section_level": 4,
      "section_title": "Two-Stage Relighting Method"
    },
    {
      "index_sentences": "Another example was a slightly more complicated case where we used Styan EG 3D to generate images, and we used the physically based shaping model. This allows us to have the generative aspect, so we can change the shape of the car, but the reflections are done with a physically based model using an environment map, which gives us some level of physical control.",
      "section_level": 4,
      "section_title": "Generative Model with Physically Based Rendering"
    },
    {
      "index_sentences": "The challenges are that general representations are unsuitable. Either they're good for rendering, like the standard physically based rendering approaches, or they're good for optimization like A and splatting.",
      "section_level": 3,
      "section_title": "Future Challenges"
    },
    {
      "index_sentences": "To conclude, when I look back, novel use synthesis is now usable in many applications. It took more than 20 years, but I don't think it's completely solved.",
      "section_level": 2,
      "section_title": "Conclusion"
    },
    {
      "index_sentences": "But the goal of allowing fast and easy 3D content creation still needs a huge amount of work. This is just a list of some of the problems. There are lots of others, so we're still stuck with the SFM step; it's still slow.",
      "section_level": 3,
      "section_title": "Future Work Needed"
    },
    {
      "index_sentences": "So in terms of take-home lessons, I think the first thing is to be very careful about how you choose your research topics and how you go forward. I think it's very important to carefully balance adopting these powerful new tools while avoiding to just jump onto the trendy wagon.",
      "section_level": 3,
      "section_title": "Take-Home Lessons"
    },
    {
      "index_sentences": "Then I like working with small flexible teams. That's just a personal preference, but most important of all, and this is the last thing I want to say, you have to have fun.",
      "section_level": 3,
      "section_title": "Personal Preferences & Having Fun"
    },
    {
      "index_sentences": "Cool, awesome, fantastic talk. We have time for some questions. Geor, I would ask you to repeat the questions.",
      "section_level": 1,
      "section_title": "Q&A Session"
    },
    {
      "index_sentences": "Thanks for the insight into where you are now. I would like to hear your take on the discussion of explicit versus implicit SE representations because we now have this explicit representation which is of course fast like MCH rendering and point renderings.",
      "section_level": 2,
      "section_title": "Q&A: Explicit vs Implicit Representations"
    },
    {
      "index_sentences": "Maybe I have one question too. If you're talking about future graphics like rendering pipelines, where do meshes fit in if everything is a splat?",
      "section_level": 2,
      "section_title": "Q&A: Where do Meshes Fit in the Future?"
    },
    {
      "index_sentences": "Are you getting questions online as well? No, I don't have one yet, but if somebody has a question online, I need your opinion for physically. So what's your opinion?",
      "section_level": 2,
      "section_title": "Q&A: BRDF Improvement vs Physics-Accurate Image"
    },
    {
      "index_sentences": "There was one question online asking for how do you see the progress for dynamic objects? So the question is, how do I see the progress for dynamic?",
      "section_level": 2,
      "section_title": "Q&A: Progress for Dynamic Objects"
    },
    {
      "index_sentences": "Okay, so the question is if I have a take on GAN reg generative model, which is kind of... the first question is, is this the same issue? I mean, as I said, it's not my area of expertise, so I don't really know much about it.",
      "section_level": 2,
      "section_title": "Q&A: Generative Models and Unstructured Representations"
    },
    {
      "index_sentences": "Just a question. Yes, do you think something... so the question is whether hierarchical representation could be used in the generative context for GS?",
      "section_level": 2,
      "section_title": "Q&A: Hierarchical Representations for Generative GS"
    },
    {
      "index_sentences": "Speaking of the formulation, if you wanted to extend us even further for physical-based attributes, how important is it to model like crisp surfaces? In terms of like... we find that we get really good looking views of a lot of scenes that aren't actually...",
      "section_level": 2,
      "section_title": "Q&A: Importance of Crisp Surfaces for PBR"
    }
  ]
};
window.faq = {
  "qas": [
    {
      "answer": "His main motivation was to generate realistic 3D environments, allowing real-time navigation, primarily to create content for graphics.",
      "index_of_source": "My interest in everything that we did and I'm going to be talking about in this talk is really based on that.",
      "question": "What was the speaker's main motivation for their research throughout their career?"
    },
    {
      "answer": "The major challenge was how to actually create the 3D scenes used in these pipelines.",
      "index_of_source": "So the elephant in the room here is how can we actually create these 3D scenes?",
      "question": "What was the \"elephant in the room\" issue with traditional computer graphics pipelines?"
    },
    {
      "answer": "These methods provided a major breakthrough by automatically determining camera poses and providing approximate geometry, eliminating the need for manual clicking.",
      "index_of_source": "It was a major breakthrough; suddenly we didn't have to click anymore.",
      "question": "How did the introduction of Structure for Motion and Multi-View Stereo around 2007-2009 change the field?"
    },
    {
      "answer": "His initial reaction was questioning why one would ray march a volume for surfaces and if neural networks were necessary, motivating him to seek alternatives.",
      "index_of_source": "Although it was still kind of slow, as a graphics person, my reaction to Nerf was: why would you want to ray march your volume when in the end you have surfaces?",
      "question": "What was the speaker's initial reaction to Neural Radiance Fields (NeRF), and what motivated looking for alternatives?"
    },
    {
      "answer": "This project led to getting rid of per-view information and developing a strategy for adding points, which were both important steps towards Gaussian Splatting.",
      "index_of_source": "First important thing: no perview information.",
      "question": "How did the project on \"mirror-like surfaces\" contribute unexpectedly to the development of Gaussian Splatting?"
    },
    {
      "answer": "Bernard introduced efficient sorting of points, which was a critical component for achieving fast rendering on the GPU.",
      "index_of_source": "So to get this speed up, as I said, the first thing well there's sorting but there's also tiling.",
      "question": "What key technical change, brought by Bernard, significantly sped up the rendering process in Gaussian Splatting?"
    },
    {
      "answer": "Gaussian Splatting allows for a completely interpretable 3D representation, unlike methods heavily reliant on complex neural networks.",
      "index_of_source": "This allows us to have a completely interpretable 3D representation.",
      "question": "Besides speed and quality, what was another advantage mentioned for Gaussian Splatting compared to some previous methods?"
    },
    {
      "answer": "The goal is to develop a new 3D representation and companion rendering algorithms compatible with physically based rendering while retaining the power of neural rendering.",
      "index_of_source": "I was lucky enough to get a second ERC grant that just started in December and the story I sold is that we want to develop a new 3DC representation and companion rendering algorithms.",
      "question": "What is a major goal for the speaker's new ERC grant regarding 3D representation?"
    },
    {
      "answer": "Meshes still have a bright future due to existing pipelines, workflows, and their compatibility with physically-based rendering features that are currently difficult with splats.",
      "index_of_source": "So I think meshes still have a pretty bright future, to be honest.",
      "question": "According to the speaker, where do traditional mesh representations fit into the future of graphics alongside new methods like Gaussian Splatting?"
    }
  ]
};
</script>
