(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{550:function(e,t,r){"use strict";r.r(t);var n=r(42),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("🔥 Make sure you "),r("a",{attrs:{href:"http://azuredev.tips?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("star the repo"),r("OutboundLink")],1),e._v(" to keep up to date with new tips and tricks.")]),e._v(" "),r("p",[e._v("💡 Learn more : "),r("a",{attrs:{href:"https://azure.microsoft.com/services/key-vault?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Microsoft Azure Key Vault"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("📺 Watch the video : "),r("a",{attrs:{href:"https://www.youtube.com/watch?v=6HKj5hOuD00&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=7&t=0s?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Functions and secure configuration with Azure Key Vault"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("h4",{attrs:{id:"protecting-application-secrets"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#protecting-application-secrets"}},[e._v("#")]),e._v(" Protecting Application Secrets")]),e._v(" "),r("p",[e._v("Almost every application uses application secrets. These are often values that you use to connect to other services, like a connection string to "),r("a",{attrs:{href:"https://azure.microsoft.com/services/storage?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Storage"),r("OutboundLink")],1),e._v(", or an API key to connect with a 3rd party API. Where do you store these secrets securely? And how can you make sure that the right people can configure these secrets? (like DevOps engineers). You shouldn't store secrets in your application code, because every developer would be able to see them. You could store your secrets in the application configuration of your app, like in the configuration settings of your "),r("a",{attrs:{href:"https://azure.microsoft.com/services/functions?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Function"),r("OutboundLink")],1),e._v(". This works, but requires DevOps engineers to go into the configuration settings of all individual services to update a setting if the value changes.")]),e._v(" "),r("p",[e._v("A better place to store application secrets is in "),r("a",{attrs:{href:"https://azure.microsoft.com/services/key-vault?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Key Vault"),r("OutboundLink")],1),e._v(". This is an Azure service that allows you to store secrets, keys and certificates in a single place and retrieve them from your applications. Many services in Azure can connect to Azure Key Vault out-of-the-box. In this post, we'll explore how to retrieve a secret from Azure Key Vault from an Azure Function.")]),e._v(" "),r("h4",{attrs:{id:"prerequisites"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),r("p",[e._v("If you want to follow along, you'll need the following:")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://visualstudio.microsoft.com/vs/?WT.mc_id=microsoft-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visual Studio 2019"),r("OutboundLink")],1),e._v(" with the Azure workload selected or "),r("a",{attrs:{href:"https://code.visualstudio.com?WT.mc_id=other-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("VS Code"),r("OutboundLink")],1),e._v(" with the Azure Function and C# Extensions installed")]),e._v(" "),r("li",[e._v("An Azure subscription (If you don't have an Azure subscription, create a "),r("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("free account"),r("OutboundLink")],1),e._v(" before you begin)")])]),e._v(" "),r("h4",{attrs:{id:"use-azure-function-to-retrieve-a-secret-from-azure-key-vault"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#use-azure-function-to-retrieve-a-secret-from-azure-key-vault"}},[e._v("#")]),e._v(" Use Azure Function to retrieve a secret from Azure Key Vault")]),e._v(" "),r("p",[e._v("We are going to create a simple Azure Function that reads a secret value from Azure Key Vault. To connect to Azure Key Vault, we'll use the built-in "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/active-directory/managed-identities-azure-resources/overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Managed Service Identity"),r("OutboundLink")],1),e._v(". Using this, we can easily connect to Azure Key Vault, without storing an API Key for Azure Key Vault in our Azure Function.\nI'm going to create the Azure Function with Visual Studio, but you can also create it with VS Code or whatever other tool that you prefer.")]),e._v(" "),r("p",[r("strong",[e._v("1. Create the Azure Function")])]),e._v(" "),r("ol",[r("li",[e._v("Open Visual Studio 2019")]),e._v(" "),r("li",[e._v("Select "),r("strong",[e._v("Create a new project")])]),e._v(" "),r("li",[e._v("Select "),r("strong",[e._v("Azure Functions (C#)")]),e._v(" and click "),r("strong",[e._v("Next")])]),e._v(" "),r("li",[e._v("Pick a name and location for the Function and click "),r("strong",[e._v("Create")])]),e._v(" "),r("li",[e._v("Now select "),r("strong",[e._v("Http trigger")]),e._v(" for the Function Type and select "),r("strong",[e._v("Anonymous")]),e._v(" for the Authorization level. This enables us to test the Function easily")]),e._v(" "),r("li",[e._v("Click "),r("strong",[e._v("Create")]),e._v(" to create the Azure Function")])]),e._v(" "),r("p",[e._v("We'll keep the Function very simple. In the function, we will add a few lines of code that will read the secret from the Azure Function configuration and display the value in the log.\nAdd the following code:")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('    var config = new ConfigurationBuilder()\n        .AddEnvironmentVariables()\n        .Build();\n\n    var secret = config["MySecret"];\n\n    log.LogInformation($"MySecret:{secret ?? "null"}");\n')])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br"),r("span",{staticClass:"line-number"},[e._v("7")]),r("br")])]),r("p",[e._v("Also add the following using statement:")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("using Microsoft.Extensions.Configuration;\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("Now we publish the Function to Azure and create a new Azure Function in the process:")]),e._v(" "),r("ol",[r("li",[e._v("In Visual Studio, right-click on the project file and select "),r("strong",[e._v("Publish")])]),e._v(" "),r("li",[e._v("In the "),r("strong",[e._v("Pick a publish target")]),e._v(" window, select "),r("strong",[e._v("Azure Functions Consumption Plan")]),e._v(" and "),r("strong",[e._v("Create New")]),e._v(" and click "),r("strong",[e._v("Create Profile")])]),e._v(" "),r("li",[e._v("Leave the information that has been filled out as it is or change it where you want. Click "),r("strong",[e._v("Create")]),e._v(" to create the Azure Function in Azure")]),e._v(" "),r("li",[e._v("When the Function is created, you are returned to the Publish window. Click "),r("strong",[e._v("Publish")]),e._v(" to publish the code to the Function in Azure")])]),e._v(" "),r("p",[e._v("That's it. The Function is now running in Azure.")]),e._v(" "),r("p",[r("strong",[e._v("2. Create a Managed Service Identity for the Azure Function")])]),e._v(" "),r("p",[e._v("We need to create an Azure Managed Service Identity for the Azure Function. This will enable the Function to connect to Azure Key Vault easily.")]),e._v(" "),r("ol",[r("li",[e._v("Go to the "),r("a",{attrs:{href:"https://portal.azure.com/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure portal"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Navigate to the Azure Function that we've just created")]),e._v(" "),r("li",[e._v("Click on the "),r("strong",[e._v("Platform features")]),e._v(" tab")]),e._v(" "),r("li",[e._v("Now click on "),r("strong",[e._v("Identity")])]),e._v(" "),r("li",[e._v("In "),r("strong",[e._v("System assigned")]),e._v(", change the status to "),r("strong",[e._v("On")]),e._v(" and click "),r("strong",[e._v("Save")])])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/59functionidentity.png")}}),e._v(" "),r("p",[e._v("(Configure Azure Function Identity)")]),e._v(" "),r("p",[r("strong",[e._v("3. Create and configure Azure Key Vault")])]),e._v(" "),r("p",[e._v("Let's create the Azure Key Vault that will store the application secret:")]),e._v(" "),r("ol",[r("li",[e._v("Go to the "),r("a",{attrs:{href:"https://portal.azure.com/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure portal"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Click the "),r("strong",[e._v("Create a resource")]),e._v(" button (the plus-sign in the top left corner)")]),e._v(" "),r("li",[e._v("Search for "),r("strong",[e._v("Key Vault")]),e._v(" and click on the result to start creating an Azure Key Vault\n"),r("ol",[r("li",[e._v("This brings you to the "),r("strong",[e._v("create Azure Key Vault blade")])]),e._v(" "),r("li",[e._v("Select a "),r("strong",[e._v("Resource Group")])]),e._v(" "),r("li",[e._v("Fill in a "),r("strong",[e._v("Name")]),e._v(" for the Key Vault")]),e._v(" "),r("li",[e._v("Select a "),r("strong",[e._v("Region")])]),e._v(" "),r("li",[e._v("Leave the rest of the settings as they are and click "),r("strong",[e._v("Review + create")])]),e._v(" "),r("li",[e._v("Click "),r("strong",[e._v("Create")]),e._v(" to create the Azure Key Vault")])])])]),e._v(" "),r("p",[e._v("After a while the Azure Key Vault is deployed. Navigate to it to start configuring it.")]),e._v(" "),r("ol",[r("li",[e._v("In the Azure portal, navigate to the Azure Key Vault")]),e._v(" "),r("li",[e._v("Click on the "),r("strong",[e._v("Access policies")]),e._v(" menu. We'll add a policy here that allows the Azure Function Managed Service Identity to access the Key Vault")]),e._v(" "),r("li",[e._v("In the "),r("strong",[e._v("Add access policy")]),e._v(" blade, click on "),r("strong",[e._v("Service principal")])]),e._v(" "),r("li",[e._v("Search for the name of the Azure Function and select the service principal that belongs to the Function")]),e._v(" "),r("li",[e._v("Also, select at least the "),r("strong",[e._v("Get")]),e._v(" operation of "),r("strong",[e._v("Secret permissions")]),e._v(". This allows the service principal to get a secret from Azure Key Vault")]),e._v(" "),r("li",[e._v("Click "),r("strong",[e._v("Add")]),e._v(" to add the policy")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/59keyvaultpolicy.png")}}),e._v(" "),r("p",[e._v("(Add Azure Key Vault Policy)")]),e._v(" "),r("p",[e._v("Now we'll add a secret to the Azure Key Vault that we can read from the Azure Function:")]),e._v(" "),r("ol",[r("li",[e._v("In the Azure Key Vault in the Azure portal, select the "),r("strong",[e._v("Secrets")]),e._v(" menu item")]),e._v(" "),r("li",[e._v("Click "),r("strong",[e._v("Generate / Import")])]),e._v(" "),r("li",[e._v("Give the secret the Name "),r("strong",[e._v("MySecret")])]),e._v(" "),r("li",[e._v("For Value, enter "),r("strong",[e._v("Secretvalue")])]),e._v(" "),r("li",[e._v("Click "),r("strong",[e._v("Create")]),e._v(" to create the secret")]),e._v(" "),r("li",[e._v("Once the secret is created, click on it to go into its details")]),e._v(" "),r("li",[e._v("You'll see the "),r("strong",[e._v("Current Version")]),e._v(" of the secret (items in Key Vault can have versions). Click on the current version to drill into it")]),e._v(" "),r("li",[e._v("You are now seeing the details of the secret. Copy the "),r("strong",[e._v("Secret Identifier")]),e._v(". We'll need to use that in the Azure Function")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/59keyvaultsecret.png")}}),e._v(" "),r("p",[e._v("(Copy the Secret Identifier)")]),e._v(" "),r("p",[r("strong",[e._v("4. Configure and run the Azure Function")])]),e._v(" "),r("p",[e._v("Now that the Azure Key Vault is configured and it has a secret in it, we can read that secret from our Azure Function:")]),e._v(" "),r("ol",[r("li",[e._v("In the Azure portal, navigate to the Azure Function that we've created earlier")]),e._v(" "),r("li",[e._v("Navigate to "),r("strong",[e._v("Platform Features")])]),e._v(" "),r("li",[e._v("Click on "),r("strong",[e._v("Configuration")])]),e._v(" "),r("li",[e._v("We are going to add a reference to the secret in the Azure Key Vault into the Function configuration. Click "),r("strong",[e._v("New application setting")])]),e._v(" "),r("li",[e._v("For the Name of the setting, type in "),r("strong",[e._v("MySecret")]),e._v(". That is what the code in the Azure Function will read")]),e._v(" "),r("li",[e._v("For the Value of the setting, type in @Microsoft.KeyVault(SecretUri=) and insert the Secret Identifier from the Key Vault secret just after the equals sign. This value format uses the native capability of Azure Functions to connect to Azure Key Vault")]),e._v(" "),r("li",[e._v("Click "),r("strong",[e._v("OK")])]),e._v(" "),r("li",[e._v("Click "),r("strong",[e._v("Save")]),e._v(" to save the new setting")])]),e._v(" "),r("p",[e._v("Once the setting has been saved, you'll see that it says "),r("strong",[e._v("Key vault Reference")]),e._v(' in its "Source" column. And if the value was entered correctly, it will show a green checkmark in front of Key vault Reference, like in the image below:')]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/59functionconfiguration.png")}}),e._v(" "),r("p",[e._v("(Setting is a Key vault Reference in Azure Function)")]),e._v(" "),r("p",[e._v("That's it! Let's test it.")]),e._v(" "),r("ol",[r("li",[e._v("In the Azure portal, click on the Function in the Function App")]),e._v(" "),r("li",[e._v("Click "),r("strong",[e._v("Run")]),e._v(" to start the Function")]),e._v(" "),r("li",[e._v("Take a look at the "),r("strong",[e._v("Log")]),e._v(". This will show a log entry that contains the secret value from the Azure Key Vault")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/59functionoutput.png")}}),e._v(" "),r("p",[e._v("(The setting from Azure Key Vault is logged when the Azure Function runs)")]),e._v(" "),r("h4",{attrs:{id:"conclusion"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),r("p",[e._v("It is a best practice to keep secrets out of your code and to centralize their management. "),r("a",{attrs:{href:"https://azure.microsoft.com/services/key-vault?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Key Vault"),r("OutboundLink")],1),e._v(" is a great service to keep secrets safe and in a central location. And it is very easy to use Azure Key Vault from an "),r("a",{attrs:{href:"https://azure.microsoft.com/services/functions?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Function"),r("OutboundLink")],1),e._v(". All you need is a "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/active-directory/managed-identities-azure-resources/overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Managed Service Identity"),r("OutboundLink")],1),e._v(" and to reference to the Azure Key Vault in a configuration setting value. Go and check it out!")])])}),[],!1,null,null,null);t.default=i.exports}}]);