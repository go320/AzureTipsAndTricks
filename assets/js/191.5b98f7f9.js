(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{546:function(t,e,o){"use strict";o.r(e);var r=o(42),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("💡 Learn more : "),o("a",{attrs:{href:"https://docs.microsoft.com/power-virtual-agents/fundamentals-what-is-power-virtual-agents?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Microsoft Power virtual Agents"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("p",[t._v("📺 Watch the video : "),o("a",{attrs:{href:"https://www.youtube.com/watch?v=4uJnIi-xOmM&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=12&t=0s?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Exploring Microsoft Power Virtual Agents based off Microsoft Bot Framework"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("h4",{attrs:{id:"power-virtual-agents"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#power-virtual-agents"}},[t._v("#")]),t._v(" Power Virtual Agents")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://docs.microsoft.com/power-virtual-agents/fundamentals-what-is-power-virtual-agents",target:"_blank",rel:"noopener noreferrer"}},[t._v("Power Virtual Agents"),o("OutboundLink")],1),t._v(" is a new way to create bots without any code. You can use it to easily create powerful bots using a guided, no-code graphical interface without the need for data scientists or developers.")]),t._v(" "),o("p",[t._v("In this post, we'll create a simple bot with Power Virtual Agents.")]),t._v(" "),o("h4",{attrs:{id:"prerequisites"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),o("p",[t._v("If you want to follow along, you'll need the following:")]),t._v(" "),o("ul",[o("li",[t._v("An Office 365 account. You can create one when you start with Power Virtual Agents: "),o("a",{attrs:{href:"https://powerva.microsoft.com/?WT.mc_id=microsoft-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://powerva.microsoft.com/"),o("OutboundLink")],1)])]),t._v(" "),o("h4",{attrs:{id:"create-a-bot-with-power-virtual-agents"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#create-a-bot-with-power-virtual-agents"}},[t._v("#")]),t._v(" Create a bot with Power Virtual Agents")]),t._v(" "),o("p",[t._v("The fun thing about Power Virtual Agents is that you don't need any coding skills. So let's create a bot and see that for ourselves!")]),t._v(" "),o("ol",[o("li",[t._v("Go to "),o("a",{attrs:{href:"https://powerva.microsoft.com/?WT.mc_id=microsoft-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://powerva.microsoft.com/"),o("OutboundLink")],1),t._v(" and sign in with your Office 365 account")]),t._v(" "),o("li",[t._v("This opens the Power Virtual Agents page and asks you to create your first bot")])]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/azuretipsandtrick-pva.jpg")}}),t._v(" "),o("p",[t._v("(Create first bot in Power Virtual Agents)")]),t._v(" "),o("ol",{attrs:{start:"3"}},[o("li",[t._v("Give the bot a name and click "),o("strong",[t._v("Create")]),t._v(". It might take a few minutes before the bot is created and ready to be edited")])]),t._v(" "),o("p",[t._v('When the bot is created, you can get started by creating a new topic. Topics are the things that start a conversation with a bot. For instance, if the user asks the bot "what\'s the weather going to be?", that can start the weather topic.')]),t._v(" "),o("ol",[o("li",[t._v("Click on the "),o("strong",[t._v("Topics")]),t._v(" menu (on the left). Here, you'll see some sample topics that are enabled for you to use. You can keep using them or turn them off if you want")]),t._v(" "),o("li",[t._v("Click "),o("strong",[t._v("New Topic")]),t._v(" in the top to start creating a new topic")]),t._v(" "),o("li",[t._v("Give the topic a "),o("strong",[t._v("Name")])]),t._v(" "),o("li",[t._v("Now put in some "),o("strong",[t._v("trigger phrases")]),t._v(' (about 5) that are different ways that a user might start a conversation about this topic. In my case, I\'m creating a topic for users that ask things like "Give me an Azure tip" or "I want to read an Azure tip". The bot will learn from these different styles of starting the conversation about your topic')]),t._v(" "),o("li",[t._v("Click "),o("strong",[t._v("Save topic")]),t._v(" in the right-hand corner")]),t._v(" "),o("li",[t._v("Next, click "),o("strong",[t._v("Go to authoring canvas")]),t._v(" to create the flow of the conversation")])]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/56addtrigger.png")}}),t._v(" "),o("p",[t._v("(Create topic in Power Virtual Agents)")]),t._v(" "),o("ol",{attrs:{start:"7"}},[o("li",[t._v("In the authoring canvas, you'll first see an empty message, after the Trigger phrases. In the message box, fill in something like \"Hello! I'll get you an Azure Tip!\"")]),t._v(" "),o("li",[t._v("Next, "),o("strong",[t._v("click the + sign")]),t._v(" below the Message step and select "),o("strong",[t._v("Ask a question")]),t._v('\na. In the textbox, fill in something like "Which tip do you want?"\nb. And in Identify, search for and select '),o("strong",[t._v("Number")]),t._v('. This will make the bot identify a number in the response of the user. We want to extract the number value when a user responds "show me tip number 200"')]),t._v(" "),o("li",[t._v("If there is a condition step below the Question step, click on its menu (the three dots on the right of its title) and click "),o("strong",[t._v("delete")])]),t._v(" "),o("li",[t._v("Now "),o("strong",[t._v("click the + sign")]),t._v(" and select "),o("strong",[t._v("Show a message")])]),t._v(" "),o("li",[t._v('In the message textbox, fill in "Here you go: https://microsoft.github.io/AzureTipsAndTricks/blog/tip.html"')]),t._v(" "),o("li",[t._v("Now move your text selection cursor between the period and "),o("strong",[t._v("html")]),t._v(" and click on the "),o("strong",[t._v("{x} Var1")]),t._v(" to insert the answer of the question step, like in the image below:")])]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/56insertvariable.png")}}),t._v(" "),o("p",[t._v("(Insert variable into message in Power Virtual Agents)")]),t._v(" "),o("ol",{attrs:{start:"13"}},[o("li",[t._v("Again, "),o("strong",[t._v("click the + sign")]),t._v(" and select "),o("strong",[t._v("End the conversation > End with survey")]),t._v(". This adds a survey at the end of the conversation")]),t._v(" "),o("li",[t._v("That's it. Click the "),o("strong",[t._v("Save button")]),t._v(" in the top-right corner to save the bot. Your conversation flow should look like the image below:")])]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/56workflow.png")}}),t._v(" "),o("p",[t._v("(Conversation flow in Power Virtual Agents)")]),t._v(" "),o("p",[t._v("Let's test the bot! You can use the test window to start talking to the bot. If you don't see the test window, click the "),o("strong",[t._v("Test your bot")]),t._v(' button in the bottom left of the screen. Ask the bot "show me an Azure tip". It will ask you which tip. And you can say something like "I want to see 221". It will return the URL to the Azure Tip and ask some questions and end the conversation.')]),t._v(" "),o("img",{attrs:{src:t.$withBase("/files/56testbot.png")}}),t._v(" "),o("p",[t._v("(Test the bot in Power Virtual Agents)")]),t._v(" "),o("p",[t._v("Now that the bot is finished, you can go to the Publish menu to publish the bot and add it to channels like "),o("a",{attrs:{href:"https://products.office.com/microsoft-teams/group-chat-software?WT.mc_id=other-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Microsoft Teams"),o("OutboundLink")],1),t._v(" and "),o("a",{attrs:{href:"https://www.skype.com/?WT.mc_id=other-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Skype"),o("OutboundLink")],1),t._v(".")]),t._v(" "),o("h4",{attrs:{id:"conclusion"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[t._v("#")]),t._v(" Conclusion")]),t._v(" "),o("p",[t._v("Creating intelligent, conversational bots is very easy with "),o("a",{attrs:{href:"https://docs.microsoft.com/power-virtual-agents/fundamentals-what-is-power-virtual-agents?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Power Virtual Agents"),o("OutboundLink")],1),t._v(". You don't need any coding or data skills. You can just get started, create your bot and publish and monitor it. Go and check it out!")])])}),[],!1,null,null,null);e.default=s.exports}}]);