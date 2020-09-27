# From author

I had a great time and lots of fun while developing this micro-framework for handling such a simple task. You might think why? Or it looks like backend code more.
Well the answer for this is pretty staight forward, I allowed myself to have a little fun with this recuirment task since in real world I'd put emphasis on pragmatism and reusability.
I'd also use react to have it done faster and more optimized, usually I go with KISS principle, so keep it simple stupid, but still decided to take this challange to show You something You probably rearly have an occasion to see.

In general I had huge challange deciding whether should I go with FLUX, MVC or simple event handlers and some fetches here, basically I decided to create something in between, so You can say I started with creating a core to then easily extend it with new functionalities. Contract I invited and sign on with myself is pretty simple though. We have viewComponents which are responsible for representing data, build with string literals, why? Because I'm tired of ol'document.createElement api all the time. Also this makes the code very verbose without a reason, that's why I decided to use string literals, build my html there and then parse it to Dom elements with DOMParser API, simple but cute. Then I have controllers, so the logic part stiring those aftermentioned view components. THis is also really simple, it decides what to put into placeholders and how to handle special stuff like onClicks etc.
Now cool part about this is that in react You have both in one, which means You have components capable of handling logic and presentation layer at same time. Usually You keep those separated in groups like smart components and "stupid" ones. Here the split is the same but the separeration is way more visible.

**Saying that I hope You had good time going through this app.**

_best regards,_
_Tomek_
