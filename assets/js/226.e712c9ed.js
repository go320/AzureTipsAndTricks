(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{582:function(e,s,n){"use strict";n.r(s);var t=n(42),a=Object(t.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),n("p",[e._v("🔥 Make sure you "),n("a",{attrs:{href:"http://azuredev.tips?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("star the repo"),n("OutboundLink")],1),e._v(" to keep up to date with new tips and tricks.")]),e._v(" "),n("p",[e._v("💡 Learn more : "),n("a",{attrs:{href:"https://docs.microsoft.com/azure/communication-services/overview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Communication Services overview"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("📺 Watch the video : "),n("a",{attrs:{href:"https://youtu.be/W-YWJYCS6YI?WT.mc_id=youtube-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to get started with Azure Communication Services Part 1 of 2 - Create a chat app"),n("OutboundLink")],1),e._v(".")])]),e._v(" "),n("h3",{attrs:{id:"how-to-get-started-with-azure-communication-services-part-1-of-2-create-a-chat-app"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-to-get-started-with-azure-communication-services-part-1-of-2-create-a-chat-app"}},[e._v("#")]),e._v(" How to get started with Azure Communication Services Part 1 of 2 - Create a chat app")]),e._v(" "),n("h4",{attrs:{id:"azure-communication-services"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#azure-communication-services"}},[e._v("#")]),e._v(" Azure Communication Services")]),e._v(" "),n("p",[e._v("When you need to interact with your customers or colleagues, you need applications that enable you to chat, send SMS messages, places calls and more. You can now easily create communication-enabled applications with the "),n("a",{attrs:{href:"https://docs.microsoft.com/azure/communication-services/?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Communication Services"),n("OutboundLink")],1),e._v(". These are a collection of APIs in Azure that you can use to "),n("a",{attrs:{href:"https://docs.microsoft.com/azure/communication-services/concepts/chat/concepts?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("chat"),n("OutboundLink")],1),e._v(", send and receive "),n("a",{attrs:{href:"https://docs.microsoft.com/azure/communication-services/concepts/telephony-sms/concepts?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("SMS"),n("OutboundLink")],1),e._v(" messages, make "),n("a",{attrs:{href:"https://docs.microsoft.com/azure/communication-services/concepts/voice-video-calling/about-call-types?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("video and audio calls"),n("OutboundLink")],1),e._v(" and place and receive "),n("a",{attrs:{href:"https://docs.microsoft.com/azure/communication-services/concepts/voice-video-calling/calling-sdk-features?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("telephone calls"),n("OutboundLink")],1),e._v(". All of these capabilities are enabled by Azure and are managed for you, without you having to set up any infrastructure.")]),e._v(" "),n("p",[e._v("This post is part of a series of posts in which we'll create an application that enables you to chat and send SMS messages:")]),e._v(" "),n("ol",[n("li",[n("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip299.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to Get Started with  Azure Communication Services Part 1 of 2 - Create a chat app"),n("OutboundLink")],1),e._v(" (this post)")]),e._v(" "),n("li",[n("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip302.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to Get Started with  Azure Communication Services Part 2 of 2 - Send SMS messeges"),n("OutboundLink")],1)])]),e._v(" "),n("p",[e._v("In this first post, we'll start by setting up Azure Communication Services and using it to create a chat application.")]),e._v(" "),n("h4",{attrs:{id:"prerequisites"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),n("p",[e._v("If you want to follow along, you'll need the following:")]),e._v(" "),n("ul",[n("li",[e._v("An Azure subscription (If you don't have an Azure subscription, create a "),n("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("free account"),n("OutboundLink")],1),e._v(" before you begin)")]),e._v(" "),n("li",[e._v("The "),n("a",{attrs:{href:"https://visualstudio.microsoft.com/downloads/?WT.mc_id=microsoft-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("latest version of Visual Studio"),n("OutboundLink")],1),e._v(", with the Web Development workload installed")])]),e._v(" "),n("h4",{attrs:{id:"set-up-azure-communication-services-and-add-chat-to-an-app"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#set-up-azure-communication-services-and-add-chat-to-an-app"}},[e._v("#")]),e._v(" Set up Azure Communication Services and add chat to an app")]),e._v(" "),n("p",[e._v("We will create an ASP.NET Core application that enables us to send chat messages and receive them. To get started, we first need to create a new Azure Communication Services resource.")]),e._v(" "),n("ol",[n("li",[e._v("Go to the "),n("a",{attrs:{href:"https://portal.azure.com/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure portal"),n("OutboundLink")],1)]),e._v(" "),n("li",[e._v("Click the "),n("strong",[e._v("Create a resource")]),e._v(" button (the plus-sign in the top left corner)")]),e._v(" "),n("li",[e._v("Search for "),n("strong",[e._v("Communication Services")]),e._v(", select the result and click "),n("strong",[e._v("Create")]),e._v(" "),n("ol",[n("li",[e._v("This brings you to the create Communication Service blade")]),e._v(" "),n("li",[e._v("Select a "),n("strong",[e._v("Resource Group")])]),e._v(" "),n("li",[e._v("Fill in a "),n("strong",[e._v("name")]),e._v(" for the Communication Services resource")]),e._v(" "),n("li",[e._v("Click "),n("strong",[e._v("Review + Create")]),e._v(" and "),n("strong",[e._v("Create")])])])])]),e._v(" "),n("img",{attrs:{src:e.$withBase("/files/85createcommunicationservice.png")}}),e._v(" "),n("p",[e._v("(Create a Communication Services resource in the Azure portal)")]),e._v(" "),n("p",[e._v("Now that the resource is created, we can use it. We'll do that from a new ASP.NET Core web application that we will create in Visual Studio. You can also use "),n("a",{attrs:{href:"https://code.visualstudio.com/?WT.mc_id=other-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("VS Code"),n("OutboundLink")],1),e._v(" to work with the ASP.NET Core application.")]),e._v(" "),n("ol",[n("li",[e._v("Open Visual Studio")]),e._v(" "),n("li",[e._v("Select "),n("strong",[e._v("Create a new project")])]),e._v(" "),n("li",[e._v("Select "),n("strong",[e._v("ASP.NET Core Web Application")]),e._v(" and select "),n("strong",[e._v("Next")])]),e._v(" "),n("li",[e._v("Pick a name and location for the application and select "),n("strong",[e._v("Create")])]),e._v(" "),n("li",[e._v("In the dialog that pops up, select "),n("strong",[e._v("Web Application (Model-View-Controller)")]),e._v(" and select "),n("strong",[e._v("Create")]),e._v(". This creates an ASP.NET Core app with views and controllers")])]),e._v(" "),n("p",[e._v("The application will look like the image below:")]),e._v(" "),n("img",{attrs:{src:e.$withBase("/files/85communicationapp.png")}}),e._v(" "),n("p",[e._v("(ASP.NET Core MVC app in Visual Studio)")]),e._v(" "),n("p",[e._v("Let's add chat to this application. First, add the following NuGet packages to the application:")]),e._v(" "),n("ul",[n("li",[e._v("Azure.Communication.Chat")]),e._v(" "),n("li",[e._v("Azure.Communication.Administration")])]),e._v(" "),n("img",{attrs:{src:e.$withBase("/files/85nugetpackages.png")}}),e._v(" "),n("p",[e._v("(NuGet packages to add in Visual Studio)")]),e._v(" "),n("p",[e._v("Next, we'll create two services that enable chat in the application. We'll call the first one the "),n("strong",[e._v("AccessTokenService")]),e._v(" and create two files for it "),n("strong",[e._v("AccessTokenService.cs")]),e._v(" for the service code and "),n("strong",[e._v("IAccessTokenService.cs")]),e._v(" for its interface. Make sure that AccessTokenService.cs contains the following code:")]),e._v(" "),n("p",[n("strong",[e._v("AccessTokenService.cs")]),e._v(":")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("    public class AccessTokenService : IAccessTokenService, IDisposable\n    {\n        private CommunicationUser user;\n        private CommunicationIdentityClient client;\n        public AccessTokenService(string communicationServiceConnection)\n        {\n            client = new CommunicationIdentityClient(communicationServiceConnection);         \n        }\n\n        public string IssueUserAccessToken(CommunicationTokenScope communicationTokenScope, CommunicationUser chatUser)\n        {        \n            var tokenResponse =  client.IssueToken(chatUser, scopes: new[] { communicationTokenScope });\n            var token = tokenResponse.Value.Token;\n\n            return token;\n        }\n\n        public CommunicationUser CreateNewUser()\n        {\n            var userResponse = client.CreateUser();\n            user = userResponse.Value;\n            return user;\n        }\n\n        public void Dispose()\n        {\n            client.DeleteUser(user);\n        }\n    }\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br"),n("span",{staticClass:"line-number"},[e._v("21")]),n("br"),n("span",{staticClass:"line-number"},[e._v("22")]),n("br"),n("span",{staticClass:"line-number"},[e._v("23")]),n("br"),n("span",{staticClass:"line-number"},[e._v("24")]),n("br"),n("span",{staticClass:"line-number"},[e._v("25")]),n("br"),n("span",{staticClass:"line-number"},[e._v("26")]),n("br"),n("span",{staticClass:"line-number"},[e._v("27")]),n("br"),n("span",{staticClass:"line-number"},[e._v("28")]),n("br"),n("span",{staticClass:"line-number"},[e._v("29")]),n("br")])]),n("p",[e._v("This code creates a new communication token, which the communication service client will use to set up chat. It also contains code to create a new user for the communication service. These users have unique IDs and are stored in Azure Communication Services. The constructor takes a connection string, which we'll feed it in the "),n("strong",[e._v("Startup.cs")]),e._v(" class later on.")]),e._v(" "),n("p",[e._v("Here is the interface code for the "),n("strong",[e._v("IAccessTokenService.cs")]),e._v(" file:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("    public interface IAccessTokenService\n    {\n        string IssueUserAccessToken(CommunicationTokenScope communicationTokenScope, CommunicationUser chatUser);\n\n        CommunicationUser CreateNewUser();\n    }\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br")])]),n("p",[e._v("The AccessTokenService code is used by the second class, "),n("strong",[e._v("ChatService")]),e._v(", which initializes chat en sends and receives messages. We need to create two files for this service called "),n("strong",[e._v("ChatService.cs")]),e._v(" and "),n("strong",[e._v("IChatService.cs")]),e._v(". Make sure that ChatService.cs contains the following code:")]),e._v(" "),n("p",[n("strong",[e._v("ChatService.cs")]),e._v(":")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('public class ChatService : IChatService\n    {\n        private ChatThreadClient chatThreadClient;\n        private IAccessTokenService _tokenService;\n        public ChatService(string communicationServiceEndpoint, IAccessTokenService tokenService)\n        {\n            _tokenService = tokenService;\n\n            // Your unique Azure Communication service endpoint\n            Uri endpoint = new Uri(communicationServiceEndpoint);\n\n            var user = _tokenService.CreateNewUser();\n\n            //get user access token\n            string userAccessToken = _tokenService.IssueUserAccessToken(CommunicationTokenScope.Chat, user);\n\n            CommunicationUserCredential communicationUserCredential = new CommunicationUserCredential(userAccessToken);\n            ChatClient chatClient = new ChatClient(endpoint, communicationUserCredential);\n\n            var chatThreadMember = new ChatThreadMember(user)\n            {\n                DisplayName = "System user"\n            };\n\n            chatThreadClient = chatClient.CreateChatThread(topic: "Customer Service", members: new[] { chatThreadMember });\n            SendMessage("Hi! Please type in your phone number to get help", "System user");\n        }\n\n        public void JoinChat()\n        {\n            var chatThreadMember = new ChatThreadMember(_tokenService.CreateNewUser())\n            {\n                DisplayName = "New user"\n            };\n            chatThreadClient.AddMembers(members: new[] { chatThreadMember });\n        }\n\n        public void SendMessage(string content, string displayName)\n        {\n            chatThreadClient.SendMessage(content, senderDisplayName: displayName);\n        }\n\n        public async Task<AsyncPageable<ChatMessage>> GetMessages()\n        {\n            var latestMessage = chatThreadClient.GetMessages().First();\n            \n                if (latestMessage.Type == "Text" && latestMessage.SenderDisplayName != "System user")\n            {\n                if (!Regex.IsMatch(latestMessage.Content, "(^^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\\\s\\\\./0-9]*$)"))\n                {\n                    SendMessage("Please provide a valid phonenumber", "System user");\n                }\n                else\n                {\n                    SendMessage("Thank you! Please check your phone for further instructions", "System user");\n                }\n            }\n\n            return chatThreadClient.GetMessagesAsync();\n        }\n    }\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br"),n("span",{staticClass:"line-number"},[e._v("21")]),n("br"),n("span",{staticClass:"line-number"},[e._v("22")]),n("br"),n("span",{staticClass:"line-number"},[e._v("23")]),n("br"),n("span",{staticClass:"line-number"},[e._v("24")]),n("br"),n("span",{staticClass:"line-number"},[e._v("25")]),n("br"),n("span",{staticClass:"line-number"},[e._v("26")]),n("br"),n("span",{staticClass:"line-number"},[e._v("27")]),n("br"),n("span",{staticClass:"line-number"},[e._v("28")]),n("br"),n("span",{staticClass:"line-number"},[e._v("29")]),n("br"),n("span",{staticClass:"line-number"},[e._v("30")]),n("br"),n("span",{staticClass:"line-number"},[e._v("31")]),n("br"),n("span",{staticClass:"line-number"},[e._v("32")]),n("br"),n("span",{staticClass:"line-number"},[e._v("33")]),n("br"),n("span",{staticClass:"line-number"},[e._v("34")]),n("br"),n("span",{staticClass:"line-number"},[e._v("35")]),n("br"),n("span",{staticClass:"line-number"},[e._v("36")]),n("br"),n("span",{staticClass:"line-number"},[e._v("37")]),n("br"),n("span",{staticClass:"line-number"},[e._v("38")]),n("br"),n("span",{staticClass:"line-number"},[e._v("39")]),n("br"),n("span",{staticClass:"line-number"},[e._v("40")]),n("br"),n("span",{staticClass:"line-number"},[e._v("41")]),n("br"),n("span",{staticClass:"line-number"},[e._v("42")]),n("br"),n("span",{staticClass:"line-number"},[e._v("43")]),n("br"),n("span",{staticClass:"line-number"},[e._v("44")]),n("br"),n("span",{staticClass:"line-number"},[e._v("45")]),n("br"),n("span",{staticClass:"line-number"},[e._v("46")]),n("br"),n("span",{staticClass:"line-number"},[e._v("47")]),n("br"),n("span",{staticClass:"line-number"},[e._v("48")]),n("br"),n("span",{staticClass:"line-number"},[e._v("49")]),n("br"),n("span",{staticClass:"line-number"},[e._v("50")]),n("br"),n("span",{staticClass:"line-number"},[e._v("51")]),n("br"),n("span",{staticClass:"line-number"},[e._v("52")]),n("br"),n("span",{staticClass:"line-number"},[e._v("53")]),n("br"),n("span",{staticClass:"line-number"},[e._v("54")]),n("br"),n("span",{staticClass:"line-number"},[e._v("55")]),n("br"),n("span",{staticClass:"line-number"},[e._v("56")]),n("br"),n("span",{staticClass:"line-number"},[e._v("57")]),n("br"),n("span",{staticClass:"line-number"},[e._v("58")]),n("br"),n("span",{staticClass:"line-number"},[e._v("59")]),n("br"),n("span",{staticClass:"line-number"},[e._v("60")]),n("br"),n("span",{staticClass:"line-number"},[e._v("61")]),n("br")])]),n("p",[e._v("This code does a lot. It first uses the AccessTokenService to create new communication credentials, which it uses to create a new "),n("strong",[e._v("ChatClient")]),e._v(" class with. With this class, it sets up a "),n("strong",[e._v("ChatThreadClient")]),e._v(", which is the thing that represents a chat thread and can be used to send and receive chat messages. The service has methods to send messages to the ChatThreadClient and to read new messages. Reading new messages in the "),n("strong",[e._v("GetMessages")]),e._v(" method, it looks for a phone number in the latest received chat message and asks the user to input a valid number if it didn't find one. We'll soon see what this is used for.")]),e._v(" "),n("p",[e._v("And here is the code for the "),n("strong",[e._v("IChatService.cs")]),e._v(" interface:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("    public interface IChatService\n    {\n        void JoinChat();\n\n        void SendMessage(string content, string displayName);\n\n        Task<AsyncPageable<ChatMessage>> GetMessages();\n    }\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br")])]),n("p",[e._v("These two services need to be injected using ASP.NET Core dependency injection. We configure that in the "),n("strong",[e._v("ConfigureServices")]),e._v(" method of the "),n("strong",[e._v("Startup.cs class")]),e._v(". Here, we inject the services as follows. Also, we feed the services a connection string and an endpoint for the Azure Communication Service. You can find these under the "),n("strong",[e._v("Keys menu")]),e._v(" of the Communication Services resource in the Azure portal. In our application, these values have been placed in the "),n("strong",[e._v("appsettings.json")]),e._v(" file")]),e._v(" "),n("p",[n("strong",[e._v("Startup.cs ConfigureServices:")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('        public void ConfigureServices(IServiceCollection services)\n        {\n            services.AddTransient<IAccessTokenService>(s => new AccessTokenService(Configuration.GetConnectionString("CommunicationServiceConnection")));\n            services.AddSingleton<IChatService>(s => new ChatService(Configuration.GetValue<string>("CommunicationServiceEndpoint"), \n                new AccessTokenService(Configuration.GetConnectionString("CommunicationServiceConnection"))));            \n\n            services.AddControllersWithViews();\n        }\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br")])]),n("p",[n("strong",[e._v("appSettings.json:")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('{\n  "Logging": {\n    "LogLevel": {\n      "Default": "Information",\n      "Microsoft": "Warning",\n      "Microsoft.Hosting.Lifetime": "Information"\n    }\n  },\n  "AllowedHosts": "*",\n  "CommunicationServiceEndpoint": "Fill in your Azure Communication Service endpoint",\n  "ConnectionStrings": {\n    "CommunicationServiceConnection": "Fill in your Azure Communication Service connection string"\n  }\n}\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br")])]),n("p",[e._v("We've now setup the plumbing for the application. Let's bring it together in the user interface. We'll create the chat window in an ASP.NET Core ViewComponent. To do that, create a new folder called "),n("strong",[e._v("ViewComponents")]),e._v(" with a file called "),n("strong",[e._v("ChatViewComponent.cs")]),e._v(". Make sure that the ChatViewComponent.cs file contains the following code:")]),e._v(" "),n("p",[n("strong",[e._v("ChatViewComponent.cs")]),e._v(":")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("    public class ChatViewComponent : ViewComponent\n    {\n        private IChatService _chatService;\n        public ChatViewComponent(IChatService chatService)\n        {\n            _chatService = chatService;\n        }\n\n        public async Task<IViewComponentResult> InvokeAsync()\n        {\n            return View(await _chatService.GetMessages());\n        }\n    }\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br")])]),n("p",[e._v("This gets the ChatService injected and uses that to read the latest messages and pass those to the view, which we'll create next.")]),e._v(" "),n("p",[e._v("We'll create the ViewComponent UI by creating a file called "),n("strong",[e._v("Default.cshtml")]),e._v(" in the folder "),n("strong",[e._v("Views\\SHared\\Components\\Chat")]),e._v(". The Default.cshtml file should look like this:")]),e._v(" "),n("p",[n("strong",[e._v("Default.cshtml:")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('@model Azure.AsyncPageable<Azure.Communication.Chat.ChatMessage>\n\n<div>\n    @await foreach (var message in Model)\n    {\n        @if (message.Type == "Text")\n        {<br />\n            <div style=" border-radius: 10px; border: 1px solid #0094ff;width:50%; margin: 0 auto;">\n                <span style="font-size:10px">@message.SenderDisplayName @message.CreatedOn.Value.UtcDateTime.ToLongTimeString()</span>\n                <br />\n                <span style="font-size:13px">@message.Content</span>\n            </div>\n        }\n    }\n\n</div>\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br")])]),n("p",[e._v("It receives the chat messages in its model, loops through them and displays them. Now let's use this view component in the "),n("strong",[e._v("Index.cshtml")]),e._v(" file. In there, create the following HTML:")]),e._v(" "),n("p",[n("strong",[e._v("Index.cshtml:")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('@{\n    ViewData["Title"] = "Home Page";\n}\n\n<div class="text-center">\n    <h1 class="display-4">Welcome to our communication app</h1>\n    @await Component.InvokeAsync("Chat")\n    <br />\n<form asp-action="Index">\n    <input  name="chatMessage" id="chatMessage" placeholder="Your message"  type="text" size="50"  />\n    <input type="submit" value="Send message" />\n</form>\n</div>\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br")])]),n("p",[e._v("This HTML has a form with a textbox and a button in it and loads the Chat view component. We use the textbox to send new chat messages. All of this is wired up in the HomeController.cs file:")]),e._v(" "),n("p",[n("strong",[e._v("HomeController.cs:")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('    public class HomeController : Controller\n    {\n        private IChatService _chatService;\n\n        public HomeController(IChatService chatService)\n        {\n            _chatService = chatService;\n        }\n\n        public IActionResult Index()\n        {\n            return View();\n        }\n\n        [HttpPost]\n        public IActionResult Index(string chatMessage)\n        {\n            _chatService.SendMessage(chatMessage, "Customer");\n\n            return View();\n        }\n\n        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]\n        public IActionResult Error()\n        {\n            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });\n        }\n    }\n')])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br"),n("span",{staticClass:"line-number"},[e._v("5")]),n("br"),n("span",{staticClass:"line-number"},[e._v("6")]),n("br"),n("span",{staticClass:"line-number"},[e._v("7")]),n("br"),n("span",{staticClass:"line-number"},[e._v("8")]),n("br"),n("span",{staticClass:"line-number"},[e._v("9")]),n("br"),n("span",{staticClass:"line-number"},[e._v("10")]),n("br"),n("span",{staticClass:"line-number"},[e._v("11")]),n("br"),n("span",{staticClass:"line-number"},[e._v("12")]),n("br"),n("span",{staticClass:"line-number"},[e._v("13")]),n("br"),n("span",{staticClass:"line-number"},[e._v("14")]),n("br"),n("span",{staticClass:"line-number"},[e._v("15")]),n("br"),n("span",{staticClass:"line-number"},[e._v("16")]),n("br"),n("span",{staticClass:"line-number"},[e._v("17")]),n("br"),n("span",{staticClass:"line-number"},[e._v("18")]),n("br"),n("span",{staticClass:"line-number"},[e._v("19")]),n("br"),n("span",{staticClass:"line-number"},[e._v("20")]),n("br"),n("span",{staticClass:"line-number"},[e._v("21")]),n("br"),n("span",{staticClass:"line-number"},[e._v("22")]),n("br"),n("span",{staticClass:"line-number"},[e._v("23")]),n("br"),n("span",{staticClass:"line-number"},[e._v("24")]),n("br"),n("span",{staticClass:"line-number"},[e._v("25")]),n("br"),n("span",{staticClass:"line-number"},[e._v("26")]),n("br"),n("span",{staticClass:"line-number"},[e._v("27")]),n("br"),n("span",{staticClass:"line-number"},[e._v("28")]),n("br")])]),n("p",[e._v('The HomeController gets the ChatService injected and uses that to send chat messages from a display name "customer".')]),e._v(" "),n("p",[e._v("That's it. Let's run it to see if it works. When the application starts it has initiated a ChatThreadClient with a user that represents a chatbot that will help you. The bot asks for your phone number. Now, you can type in a message and press "),n("strong",[e._v("Send Message")]),e._v(" to send it. When the message is received, the ChatService checks if the message is a valid phone number. If it isn't, it will send another message, asking for a valid number. And if it is, it will thank you and tell you to check your phone for further instructions. This step would send an SMS that you receive on your phone, which we will implement in the next part of this series.")]),e._v(" "),n("img",{attrs:{src:e.$withBase("/files/85result.png")}}),e._v(" "),n("p",[e._v("(The chat application in action)")]),e._v(" "),n("h4",{attrs:{id:"conclusion"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),n("p",[e._v("Creating an application that uses "),n("a",{attrs:{href:"https://docs.microsoft.com/azure/communication-services/?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Communication Services"),n("OutboundLink")],1),e._v(" is easy and straightforward. You can use the "),n("a",{attrs:{href:"https://github.com/Azure/Communication?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("SDKs"),n("OutboundLink")],1),e._v(" to talk to Communication Services and use "),n("a",{attrs:{href:"https://docs.microsoft.com/azure/communication-services/concepts/chat/concepts?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("chat"),n("OutboundLink")],1),e._v(", "),n("a",{attrs:{href:"https://docs.microsoft.com/azure/communication-services/concepts/telephony-sms/concepts?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("SMS"),n("OutboundLink")],1),e._v(", "),n("a",{attrs:{href:"https://docs.microsoft.com/azure/communication-services/concepts/voice-video-calling/about-call-types?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("voice and video"),n("OutboundLink")],1),e._v(" or "),n("a",{attrs:{href:"https://docs.microsoft.com/azure/communication-services/concepts/voice-video-calling/calling-sdk-features?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("telephone"),n("OutboundLink")],1),e._v(" to communicate. Go and check it out!")])])}),[],!1,null,null,null);s.default=a.exports}}]);