(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{572:function(e,t,a){"use strict";a.r(t);var r=a(42),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("🔥  The FREE Azure Developer Guide eBook is available "),a("a",{attrs:{href:"https://aka.ms/azuredevebook?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("💡 Learn more : "),a("a",{attrs:{href:"https://docs.microsoft.com/aspnet/core/blazor/?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Introduction to ASP.NET Core Blazor"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("📺 Watch the video : "),a("a",{attrs:{href:"https://youtu.be/uKz3fPuhk4E?WT.mc_id=youtube-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Securing a Blazor application with AAD"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"how-to-secure-a-blazor-application-with-azure-active-directory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-secure-a-blazor-application-with-azure-active-directory"}},[e._v("#")]),e._v(" How to secure a Blazor application with Azure Active Directory")]),e._v(" "),a("h4",{attrs:{id:"secure-your-applications-with-azure-active-directory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#secure-your-applications-with-azure-active-directory"}},[e._v("#")]),e._v(" Secure your applications with Azure Active Directory")]),e._v(" "),a("p",[e._v("You can use "),a("a",{attrs:{href:"https://azure.microsoft.com/services/active-directory/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Active Directory (AAD)"),a("OutboundLink")],1),e._v(" to make users authenticate and authorize to use your app. AAD provides an intelligent identity-as-a-service that protects your application. And it is easy to use and implement.")]),e._v(" "),a("p",[e._v("In this post, we will create a new "),a("a",{attrs:{href:"https://docs.microsoft.com/aspnet/core/blazor/?view=aspnetcore-3.1#blazor-webassembly&?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Blazor WebAssembly"),a("OutboundLink")],1),e._v(" application and implement "),a("a",{attrs:{href:"https://azure.microsoft.com/services/active-directory/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Active Directory"),a("OutboundLink")],1),e._v(" in it, so that users can authenticate themselves in the app.")]),e._v(" "),a("h4",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("p",[e._v("If you want to follow along, you'll need the following:")]),e._v(" "),a("ul",[a("li",[e._v("An Azure subscription (If you don't have an Azure subscription, create a "),a("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("free account"),a("OutboundLink")],1),e._v(" before you begin)")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://dotnet.microsoft.com/download/dotnet-core/3.1?WT.mc_id=microsoft-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v(".NET Core latest version SDK"),a("OutboundLink")],1)])]),e._v(" "),a("h4",{attrs:{id:"implementing-azure-active-directory-in-a-blazor-webassembly-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementing-azure-active-directory-in-a-blazor-webassembly-application"}},[e._v("#")]),e._v(" Implementing Azure Active Directory in a Blazor WebAssembly application")]),e._v(" "),a("p",[e._v("We will secure a standalone, Blazor WebAssembly application with Azure Active Directory (AAD). To do this we'll start by registering an application in AAD in the Azure portal.")]),e._v(" "),a("ol",[a("li",[e._v("Go to the "),a("a",{attrs:{href:"https://portal.azure.com/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure portal"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Select the "),a("strong",[e._v("Menu in the top-left corner")]),e._v(" and select "),a("strong",[e._v("Azure Active Directory")])]),e._v(" "),a("li",[e._v("In AAD, select "),a("strong",[e._v("App registrations")])]),e._v(" "),a("li",[e._v("Select "),a("strong",[e._v("New registration")]),e._v(". This will bring up the "),a("strong",[e._v("Register an application")]),e._v(" blade. We'll use this to register the Blazor application\n"),a("ol",[a("li",[e._v("Fill in a "),a("strong",[e._v("Name")]),e._v(" for the application")]),e._v(" "),a("li",[e._v("Leave the "),a("strong",[e._v("Supported account types")]),e._v(" to "),a("strong",[e._v("Accounts in this organizational directory only")])]),e._v(" "),a("li",[e._v("In redirect URI, select "),a("strong",[e._v("Web")]),e._v(" and fill in https://localhost:5001/authentication/login-callback. We'll use the 5001 port for the app as that is the default port for it in IIS express, but it could be that we need to change this later when the application is created")]),e._v(" "),a("li",[e._v("Select "),a("strong",[e._v("Register")]),e._v(" to create the app registration")])])])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/76appregistration.png")}}),e._v(" "),a("p",[e._v("(Register an application in the Azure portal)")]),e._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[e._v("When the app has been registered, you'll see the "),a("strong",[e._v("client id and tenant id")]),e._v(". Copy these as we'll need them later")])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/76clientid.png")}}),e._v(" "),a("p",[e._v("(App details in the Azure portal)")]),e._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[e._v("Select the "),a("strong",[e._v("Authentication")]),e._v(" menu")]),e._v(" "),a("li",[e._v("Under "),a("strong",[e._v("Implicit grant")]),e._v(", check the boxes for "),a("strong",[e._v("Access tokens and ID tokens")])])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/76grant.png")}}),e._v(" "),a("p",[e._v("(Enable implicit grant in the Azure portal)")]),e._v(" "),a("ol",{attrs:{start:"8"}},[a("li",[e._v("Select "),a("strong",[e._v("Save")])]),e._v(" "),a("li",[e._v("That's it! Now, we can create the Blazor application. Open a command prompt and create the Blazor app with the following command, where you fill in the client and tenant id and the name of the app registration:")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('dotnet new blazorwasm -au SingleOrg --client-id "{CLIENT ID}" -o {APP NAME} --tenant-id "{TENANT ID}"\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ol",{attrs:{start:"10"}},[a("li",[e._v("The previous command created a folder that contains the Blazor WebAssembly application. "),a("strong",[e._v("Navigate to the folder")]),e._v(" in the command prompt")]),e._v(" "),a("li",[e._v("Now run the following command to compile the app:")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("dotnet build\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ol",{attrs:{start:"12"}},[a("li",[e._v("And run the app with:")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("dotnet run\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ol",{attrs:{start:"13"}},[a("li",[e._v("The output will show you the URL on which the application is running. Check if the port of the URL is the same as we configured in the app registration in AAD (5001). If it isn't, change the app registration to match the port. "),a("strong",[e._v("Open a browser and navigate to the URL")]),e._v(" of the Blazor app. The application has a "),a("strong",[e._v("login")]),e._v(" menu item that you use to authenticate. Click on it and log in with your Azure account or another account that is present in your AAD tenant. You'll be logged in and see your name")])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/76blazorlogin.png")}}),e._v(" "),a("p",[e._v("(Authenticated in the Blazor WebAssembly app)")]),e._v(" "),a("h4",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://azure.microsoft.com/services/active-directory/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Active Directory"),a("OutboundLink")],1),e._v(" enables you to secure your applications without worrying about complicated security setup. You can use it to secure all kinds of applications, including "),a("a",{attrs:{href:"https://docs.microsoft.com/aspnet/core/blazor/?view=aspnetcore-3.1#blazor-webassembly&?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Blazor WebAssembly apps."),a("OutboundLink")],1),e._v(". Go and check it out!")])])}),[],!1,null,null,null);t.default=i.exports}}]);