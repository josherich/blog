---
layout: post
title: "Dramatically improve microscope resolution with an LED array and Fourier Ptychography"
date: 2025-03-03 00:00:01
categories: podcast applied-science
tags: [podcast_script]
---

[Dramatically improve microscope resolution with an LED array and Fourier Ptychography](https://www.youtube.com/watch?v=9KJLWwbs_cQ)

Today on Applied Science I'd like to show you this technique of improving the resolution of a microscope by adding an LED array where the normal illumination goes and then capturing hundreds of images, one for each LED and combining them computationally to make a result that is dramatically higher resolution than the input images. This is crazy, right? It looks like a completely different image, but this is actually a valid technique even though it does appear to be violating the physical resolution limit of the microscope objective.

So let me show you how this works. This very clever technique was developed first at Caltech within the last 10 or 15 years, and most of the heavy lifting is done in the algorithm. The physical setup of capturing images is pretty straightforward, but there are a couple of important things to point out here. The LED array really should approximate point sources of light. I originally tried making it work with this larger 2812 array of LEDs, and this does not work because these LEDs are just physically too large. So I ended up using a so-called Hub 75 LED array, and these are really small LEDs with no smarts in them, so it's basically just a bunch of shift registers as opposed to an LED Matrix like this where each LED has a processor inside it.

I'm using a pitch of 2 mm, but really the ideal pitch for this setup is about 4 mm, so I'm just using every other LED. This whole process works best with a 4X or a 2X microscope objective, and if your objective has an infinity sign on it, that means that the optical alterations of that objective are best corrected when the objective has infinity space behind it. In other words, your camera is infinity far away on this side, but since that's pretty impractical, we have to add another lens called a tube lens to focus down this infinity light to the focal plane of the camera.

If your microscope objective has a number here like 160, that means you do not need a tube lens. In fact, it works better to have the focal plane 16 mm behind the microscope objective. When I was initially putting together YouTube video ideas about this whole technique, one of the hooks in my mind I was thinking of was, you know, turn a cheap microscope into a really expensive microscope with this one weird trick. But as it turns out, that's actually not accurate, because you need a very high-quality imaging system to make this technique work since we're extracting so much information from the images to come up with this resolution boost. If you use cheap optics that have a lot of aberration, this doesn't work at all; you actually need pretty high-quality optics.

I'm controlling the Hub 75 LED array with a Teensy microcontroller, and I also use the microcontroller to control the shutter release for the camera. It's just this little relay here, and so the way I do this is just hardcode everything into the Arduino program and then download the program, which starts the whole acquisition process of stepping through the LEDs and acquiring an image for each. I'll upload all the stuff to my GitHub, including the reconstruction algorithms and everything. It's all MIT licensed, and you can play with it to your heart's content.

I acquired all of the images using a Lumix G85, which is actually what you're looking through right now. This is a GH1 just standing in for it, but as we'll find out, this is actually a big problem. The issue is that there's a color filter in this camera, and that poses a really big problem for reconstructing these images, which we'll get to later. So if you're going to attempt to try this technique out for yourself, you've got to get a monochrome camera, something that doesn't have a color filter array, which is actually not so easy these days.

Before we get to the computer to process our images, I want to show you visually how this technique works because it's just so clever. So I have a laser pointer here, and if we put a diffraction grading in there, you know what's going to happen. The light diffracts; the primary beam goes through, and then we have these diffracted beams. This is 600 lines per millimeter, and if we go up in density to 1,000 lines per millimeter, the angle of diffraction is much more acute. 

If we had an unknown grating, we could put that here and measure the angle of diffraction to figure out how many lines per millimeter it had. Okay, that all makes sense, but let's say we wanted to get an image of this diffraction grating like we want a microscopic image of those lines per millimeter. So we get a lens and put that here, and when we put our grating in front of it, everything seems fine. All the light is going into the lens, and we can focus it down and get an image of that diffraction grating.

But look what happens if we go back to the really high-density grating; the diffracted beams miss the lens entirely. So there's no way that the information from this diffraction grating about how many lines per millimeter it has can get into that lens because the angle of diffraction is greater than the light cone that this lens is accepting. So it's kind of a visual way to figure out that there's no way that this imaging system can see how many lines per millimeter this has because clearly the light is missing the lens system entirely. 

Now, if we move this closer to the lens, in other words, if the lens were bigger in diameter or if it had a shorter focal length, then the light would go into the optical system, and we could have a chance at imaging it. In other words, if the lens had a higher numerical aperture, then the resolution limit would be higher because it can accept more of these highly diffracted beams of light into the optical system to get focused down to make the image. Pretty cool, right? That's the fun fundamental basis for diffraction-limited optics, meaning how much of a diffraction pattern it can accept to get higher resolution.

Now, you might be saying, "Well, sure, this works for diffraction gratings, but what about a real slide that has an actual sample in there?" I mean that's not a diffraction grating. Well, actually, it kind of is. I mean light diffracts whether you want it to or not, and so even very complicated images like an animal cell or plant cell or whatever you're looking at with your microscope, all of the same features that cause diffraction in a grating are also in a real sample.

Now you might be able to guess what this technique is going to do. Remember we're shining our beam in like this, and the diffracted light is missing our optic, so how do we get it in there? What if we turned the laser pointer by a known angle? Now look what's happening: the primary beam is missing our lens, but the diffracted beam is going right into it and getting focused down. Quite clever, isn't it? In fact, we can capture images all along these different angles and be able to determine the number of lines per millimeter in our unknown grating just based on how far we've rotated our light source around and figuring out if there's any light coming through there.

And remember, a real slide that has animal or plant cells or whatever is just a very complicated diffraction grading that has all number of different lines per millimeter. So as we're sort of sweeping through all these different angles, we're capturing different types of spatial density, different spatial frequencies for every one of these angles. This whole technique of Fourier transform is capturing all these different spatial frequencies using a small lens and then putting them all back together. 

So it's basically like having a huge lens because we've swept through all the different angles of possible diffraction. And remember, this is happening in two dimensions.
Sweeping vertically and we're sweeping horizontally, and we're putting all of this together as if our lens were enormous. The trick is how do we put all this together computationally. That's why it took quite a while to come up with this technique and make it work. It's not so trivial to capture all those images with all the different spatial information that they contain and put them together into one final output image.

We can actually see this work with real optics too, so I have a 2X microscope objective here, the laser pointer, and a screen down there. If we put a fairly low-density diffraction grading in here, it resolves the lines because the pitch of this is coarse enough where this optical system can resolve it, no problem. It's pretty obvious what's going on there.

Now if we go to a high-density optical grading, this system has no chance of imaging because we can see the diffracted beam is missing the optic entirely. We can go down there and magnify the image as much as we want, and we never see any lines per millimeter because, again, the information is just missing. So then we'll do our sneaky technique and rotate this laser pointer until the diffracted beam is going through. 

Now the primary beam is hitting here and the diffracted beam is going into the optics, so if we go down there and amplify that, magnify that image, are we going to see any lines per millimeter? No, actually, because this optical system can't possibly image 1,000 lines per millimeter. The fact that we're seeing light down there just means that there's a region of the image that is diffracting, and actually the information is the angle that we're shooting the light into the grading.

So imagine it this way: instead of just a flat grading here, imagine that this were a checkerboard, a tiny little checkerboard, and all the white squares are 1,000 lines per millimeter and all the black squares are 600 lines per millimeter. So what's going to happen is when we rotate through these angles, there'll be one angle at which all of the black squares are activated. I mean, they're diffracting light and sending it into our optical system, so we'll end up with all of the black squares being illuminated over there.

Then when we get to the magic angle for a 1,000 lines per millimeter, all the white squares will be activated and we'll see that. The image that we're getting tells us where in the image that spatial frequency is happening. It doesn't tell us exactly what spatial frequency it is because we're getting that information from the angle.

So you can see how this would scale up to an actual slide of, you know, animal or plant cells. It's basically just a very complicated checkerboard where different parts of the image have different spatial frequencies, and we collect all those spatial frequencies by changing our illumination angle. So for every pixel in the image, we end up with several hundred spatial frequencies, and we look through all those spatial frequencies to figure out what the actual features are in that region of the image.

If we move to actual images collected with this setup, you can see this working with the Air Force Target, the resolution target. If we start off with central illumination, of course that's called bright field because we're looking right at the illumination source. But now if we move the angle of illumination off to the side, you can see each region of the resolution target lighting up in turn as we get into more and more extreme angles and higher and higher spatial frequencies.

It's really, it almost seems so simple that it's never going to work, but really the technique does scale up to very complicated images and we can extract a huge amount of detail by collecting just a few hundred spatial frequencies. Let's talk about the image processing pipeline. So we've got a whole bunch of images from the digital camera, and they're all raw. We can't shoot in JPEG because the compression would destroy this whole technique.

And again, if you want to try this, don't do what I did because collecting images from a modern DSLR camera that's color makes this not work, and I'll show you why. The, you know, modern color cameras have this color filter over the image sensor. So we're going to illuminate the scene with a monochromatic LED, let's just say red LEDs. So it seems like it would work to just use the red sensors only and just, you know, take only the red channel, but this doesn't work because what we're doing is subsampling the image.

If we interpolate between red pixels, it's possible that we're going to make an incorrect assumption. Remember this technique is super sensitive to every little nuance of the image; movements of, you know, hundreds of microns of different angles and camera illumination. You know, a pixel being off by just a few values, it's really, really very sensitive. So I tried my best to use a single channel and it doesn't work. It will not reconstruct the image at all. 

So I came up with this other idea. As it turns out, the red, green, and blue color filters in my camera overlap quite significantly, and if I illuminate the scene with a green LED, there's actually a little bit of information that comes through all of the channels. So in this scene, you can see there's a little bit of red, a little bit of blue, and some green. And as it turns out, what we can do is add a correction factor to the red, the blue, and the green channels so that when we put them all back together, we end up with a black and white image that is really high resolution because we're basically using all of those subpixels and trying to adjust for the different sensitivities.

It does seem a little weird; a green LED actually registers in both the red and blue channels on the camera, but it's true. It's not quite as sensitive; you can see there's a pretty big difference. But it does work, and it works well enough to basically allow this technique to function on certain images, like that Air Force Target, the resolution target works, but this tissue sample does not work. It's too complicated; I could not get this to reconstruct.

So again, if you're going to try this, you've got to get a hold of a scientific CMOS camera that has a monochrome image sensor. So anyway, I used this program called RawTherapee to take the raw images from the camera, apply this color correction and debayer, and save these as TIFF images for import into the Octave script, which does all the work. I didn't write all of this; this came from the Waller Lab at UC Berkeley, and credit where credit's due. These folks published their work with the MIT license and put it all up on GitHub, which allowed me to make this whole video. 

So super big thank you to them. Of course, the code didn't work when I downloaded it, but hey, you know you get what you pay for. I made a bunch of tweaks to it and re-uploaded it on my GitHub, and you're welcome to pick through that. Hopefully, it works when you download mine, but you never know. The program must know about the optical setup with extreme detail. Obviously, it needs to know the wavelength of the light; it needs to know the dimensions of the image; it needs to know the numerical aperture of the objective that you're using, so it knows what the light cone is that the objective can capture.

It needs to know the magnification of the setup, the size of the pixels on the image plane. This NP is basically how big of a reconstruction you want to make. One of the limitations of this implementation is that it can't improve the resolution of your input image edge, it has to use a subset. So 500 pixels is going to be the subset from this 3,000 pixel square image. We need to know the spacing between the LED.
As we need to know the distance from the LEDs to the image plane to figure out the angle, remember what this thing really needs to figure out is the illumination angle because that tells it what spatial frequency to assign to that illumination angle. 

So I added this way of keeping track of which LEDs need to be illuminated, and I came up with this idea of making a text file that has a C array, like an array defined in the language C that we can pump into the Arduino script, and then it can cycle through those to light up all the LEDs. 

So it prints out this array that you can copy and paste into your C code into the Arduino C code. This is where we start loading the images; pretty straightforward. 

There are a bunch of commented lines which take into account different types of images. One limitation is that raw therapy can't produce mono images; they're all color. Even if you made a black and white image in raw therapy, it just stores the same value for red, green, and blue. 

So to make things easier, this thing can just pick out one channel if you want. A lot of this work is basically setting up the matrix that tells the system what spatial frequency it gets from each one of these acquired images. 

Just keeping track of all these different matrices is a huge amount of work. There's like a ton of off-by-one style errors where it's zero index or one index or row major or column major, left flip, up down, mirrored. 

You know, left right—it's just a ton of stuff to keep track of, especially when you're coordinating between this and the firmware code in the real world. It helps a lot to just come up with test lighting schemes that start off in one corner and go to the other corner to make sure that all the lefts and rights line up. 

I noticed a couple notes from the original author of this code that said denoising is important, and so I experimented with different settings in raw therapy to denoise the image, either not at all or actually to a very high extent, and I didn't notice a huge amount of difference. 

There's also a small amount of code in here that attempts to subtract the background amount of signal from the image sensor, and I think this is because the image sensor that they were using is much rarer than even the raw from a consumer camera. 

So in other words, it backgrounds at several hundred counts, whereas a consumer camera really does get pretty close to zero, at least with the exposures that I was doing. So this part could actually be improved. 

It sort of finds a couple regions that are representative of the background and attempts to figure out what the background is just based on that. I found it was a lot easier just to figure it out once and just set it to a static value. 

Although that reminds me of another problem, you know the bright field images—the ones that come from the center where the illumination is directly below—are obviously quite a bit brighter than the ones off to the side. 

So the question is, can you change the exposure? Does the algorithm allow you to have different exposure levels? I actually never quite figured this out. I think the short answer is no; you actually have to use the same illumination level for the center images as you do for the edge images. 

But again, I'm not exactly sure, and this is something that is left to the reader as an exercise after we get to the actual algorithm. All of this stuff gets pumped into the algorithm, and it takes all these images and fills up Fourier space with all the Fourier transforms of the input images. 

You can sort of think of it like filling up a grid where each image that we acquired is a different place in Fourier space. So it puts all these images together; stitching them and overlap is important to make the stitching process easier. 

Then, once it stitched together all these images in Fourier space, it takes the inverse Fourier transform of that to go back to a final output image. Now, the challenge is that we need to know the phase information to do the inverse Fourier transform, and we don't have it. 

There's no way to get it because we don't have phase-sensitive image sensors, so we have to guess and then go through the whole process and check if there's errors when we're done. 

We can do that because we have the bright field image. So if we do the inverse Fourier transform of this assembled image and then we check it against what we actually received in the bright field, and there's errors, we can incorporate that into our phase estimate and do the whole process again. 

So it typically takes about 10 iterations, but the benefit is that we also get phase information out of this whole process. A lot of microscopy folks are excited about this technique, not even because of the resolution enhancement, but because you also get phase information out. 

For a lot of samples, they don't really absorb light very well, so they don't look good in a microscope, but they do shift the phase of the light going through, and this technique actually highlights that as well. 

The final thing that I added was this function to save all the parameters used in the reconstruction along with a unique file name. So I ended up iterating through many, many different tweaks before realizing that the Bayer sensor was probably my problem all along. 

I assumed that the reason this wasn't working for me initially is because I just didn't have all these parameters set up properly. So I made this just automatically come up with a new file name to save all the parameters to figure out what I did. 

So anyway, if you're interested in this, I encourage you to go to GitHub and download it. You don't even need a microscope to play with this; there's sample data up there, and you can try the reconstruction out without even having a microscope. 

And if you do have a microscope and a monochrome camera, give it a shot. It's pretty fun to be able to pull out this amazing amount of detail. 

One last note: you might be wondering this whole time why don’t you just mechanically step over? Like, the whole benefit of this process is that it gives you improved resolution for a wide field of view, but you could just use a high magnification objective that has high resolution and just mechanically step over the stage. 

Yeah, well, that's a good point. So I don't think this is going to shake up the entire field of microscopy, but there are some applications where this does make more sense. In this video, I showed you the most sort of obvious way of doing this—collecting one image for each light. 

But as you can imagine, the techniques get a lot more interesting where you can have more than one LED on at the same time, a coded pattern, and you can get away with many fewer acquisitions. 

So imagine you had 10 LEDs on at the same time, pseudo-randomly chosen to sample the Fourier space; then you might get away with only 10 acquisitions instead of a few hundred. 

So then it's actually significantly faster than mechanically stepping a stage over. Another benefit is that you are using a low magnification objective, and so the working distance can be very high. 

So depending on your sample type, you might be forced to have a high working distance. This technique can also be extended to fix all kinds of other problems. 

For example, after going through this whole reconstruction, you can figure out what the optical aberration of your lens system is and compensate for them automatically. 

You can also acquire—so far we've only been talking about two dimensions—but this whole technique would scale up to three-dimensional acquisition as well. 

And so, you know, this is really more of a jumping-off point even than a final conclusion on what this technique can offer. Well, I hope you found that.
interesting and I will see you next time.

bye.
