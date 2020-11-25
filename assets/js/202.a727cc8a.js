(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{557:function(e,t,r){"use strict";r.r(t);var n=r(42),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("🔥 Make sure you "),r("a",{attrs:{href:"https://github.com/Microsoft/AzureTipsAndTricks?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("star the repo"),r("OutboundLink")],1),e._v(" to keep up to date with new tips and tricks.")]),e._v(" "),r("p",[e._v("💡 Learn more : "),r("a",{attrs:{href:"https://keda.sh?WT.mc_id=other-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes Event-driven Autoscaling (KEDA)"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("📺 Watch the video : "),r("a",{attrs:{href:"https://www.youtube.com/watch?v=wSv67WeNqdQ&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=15&?WT.mc_id=youtube-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Functions on Kubernetes with KEDA"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("h3",{attrs:{id:"azure-functions-on-kubernetes-with-keda-part-1-of-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#azure-functions-on-kubernetes-with-keda-part-1-of-2"}},[e._v("#")]),e._v(" Azure Functions on Kubernetes with KEDA Part 1 of 2")]),e._v(" "),r("h4",{attrs:{id:"azure-functions-running-in-kubernetes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#azure-functions-running-in-kubernetes"}},[e._v("#")]),e._v(" Azure Functions Running in Kubernetes")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://azure.microsoft.com/services/functions?WT.mc_id=other-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Functions"),r("OutboundLink")],1),e._v(" are great for running tasks on demand, like processing queue messages or resizing images. And Azure Functions can run anywhere. In Azure in a "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-functions/functions-scale#consumption-plan?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("consumption plan"),r("OutboundLink")],1),e._v(" or "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-functions/functions-scale#app-service-plan?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("App Service Plan"),r("OutboundLink")],1),e._v(". Locally, using the "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-functions/functions-runtime-overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Functions runtime"),r("OutboundLink")],1),e._v(". And even in containers, also using the Azure Functions runtime.")]),e._v(" "),r("p",[e._v("Running Azure Functions in containers can be very useful when you want control over your infrastructure. For instance, you can run an Azure Function in a container in "),r("a",{attrs:{href:"https://azure.microsoft.com/services/kubernetes-service?WT.mc_id=other-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Kubernetes Service"),r("OutboundLink")],1),e._v(". But how do you get it to scale on demand, just like a Function that runs on a consumption plan? Kubernetes-based Functions provides the Functions runtime in a "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-functions/functions-create-function-linux-custom-image?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker container"),r("OutboundLink")],1),e._v(" with event-driven scaling through "),r("a",{attrs:{href:"https://keda.sh?WT.mc_id=other-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("KEDA"),r("OutboundLink")],1),e._v(". KEDA can scale in to 0 instances (when no events are occurring) and out to "),r("em",[e._v("n")]),e._v(" instances. It does this by exposing custom metrics for the Kubernetes autoscaler ("),r("a",{attrs:{href:"https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale-walkthrough?WT.mc_id=other-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Horizontal Pod Autoscaler"),r("OutboundLink")],1),e._v("). Using Function containers with KEDA makes it possible to replicate serverless Function capabilities in any Kubernetes cluster.")]),e._v(" "),r("p",[e._v("In this series of posts, we'll create an Azure Function that is triggered by an "),r("a",{attrs:{href:"https://azure.microsoft.com/services/storage/queues?WT.mc_id=other-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Storage Queue"),r("OutboundLink")],1),e._v(" and runs in Azure Kubernetes Service. And we'll make the Function scale by using KEDA.")]),e._v(" "),r("p",[e._v("This series contains two posts:")]),e._v(" "),r("ol",[r("li",[e._v("Azure Functions on Kubernetes with KEDA Part 1 of 2 (this post) - Creating and building a containerized Azure Function")]),e._v(" "),r("li",[e._v("Azure Functions on Kubernetes with KEDA Part 1 of 2 - Running the Azure Function in AKS with KEDA")])]),e._v(" "),r("h4",{attrs:{id:"prerequisites"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),r("p",[e._v("If you want to follow along, you'll need the following:")]),e._v(" "),r("ul",[r("li",[e._v("An Azure subscription (If you don't have an Azure subscription, create a "),r("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("free account"),r("OutboundLink")],1),e._v(" before you begin)")]),e._v(" "),r("li",[e._v("You'll need the "),r("a",{attrs:{href:"https://visualstudio.microsoft.com/downloads/?WT.mc_id=microsoft-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("latest version of Visual Studio"),r("OutboundLink")],1),e._v(" with the Azure workload installed. Alternatively, you can use "),r("a",{attrs:{href:"https://code.visualstudio.com?WT.mc_id=other-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Visual Studio Code"),r("OutboundLink")],1),e._v(" with the "),r("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions&WT.mc_id=other-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Function extension"),r("OutboundLink")],1),e._v(" installed")]),e._v(" "),r("li",[e._v("You need Docker on your PC to develop container-based applications. Download it "),r("a",{attrs:{href:"https://store.docker.com/editions/community/docker-ce-desktop-windows?WT.mc_id=other-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("The "),r("a",{attrs:{href:"https://docs.microsoft.com/cli/azure/?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure CLI"),r("OutboundLink")],1),e._v(". You can "),r("a",{attrs:{href:"https://docs.microsoft.com/cli/azure/install-azure-cli?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("download it for Windows, Linux or Mac"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Node.js, which includes npm that we need to install the "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-functions/functions-run-local?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Functions Core Tools"),r("OutboundLink")],1),e._v(". You can "),r("a",{attrs:{href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm?WT.mc_id=other-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("download Node.js here"),r("OutboundLink")],1)])]),e._v(" "),r("h4",{attrs:{id:"creating-a-containerized-azure-function-with-an-azure-storage-queue-trigger"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-containerized-azure-function-with-an-azure-storage-queue-trigger"}},[e._v("#")]),e._v(" Creating a containerized Azure Function with an Azure Storage Queue Trigger")]),e._v(" "),r("p",[e._v("Before we create an Azure Function that gets triggered by a message on an Azure Storage Queue, we need to create that queue. Let's do it:")]),e._v(" "),r("ol",[r("li",[e._v("Go to the "),r("a",{attrs:{href:"https://portal.azure.com/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure portal"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Click the "),r("strong",[e._v("Create a resource")]),e._v(" button (the plus-sign in the top left corner)")]),e._v(" "),r("li",[e._v("Search for "),r("strong",[e._v("Storage")]),e._v(" and click on the result to start creating an Azure Storage account\na. This brings you to the create blade of Azure Storage\nb. Select a "),r("strong",[e._v("Resource Group")]),e._v(" (or create a new one)\nc. Fill in a "),r("strong",[e._v("name")]),e._v(" for the account in the "),r("strong",[e._v("Storage account name")]),e._v(" field\nd. Select a "),r("strong",[e._v("Location")]),e._v("\ne. Leave the rest of the settings as they are and click "),r("strong",[e._v("Review + create")]),e._v(" and "),r("strong",[e._v("Create")]),e._v(" after that")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/63createstorage.png")}}),e._v(" "),r("p",[e._v("(Create Azure Storage Account in the Azure portal)")]),e._v(" "),r("p",[e._v("Now that we have a storage account, let's create a queue in it:")]),e._v(" "),r("ol",[r("li",[e._v("In the Azure portal, navigate to the storage account")]),e._v(" "),r("li",[e._v("Click on "),r("strong",[e._v("Queues")]),e._v(" to access the Azure Storage Queues feature")]),e._v(" "),r("li",[e._v("Click "),r("strong",[e._v("Add queue")])]),e._v(" "),r("li",[e._v("Fill in a "),r("strong",[e._v("name")]),e._v(" for the queue")]),e._v(" "),r("li",[e._v("Click on "),r("strong",[e._v("OK")]),e._v(" to create the queue")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/63createqueue.png")}}),e._v(" "),r("p",[e._v("(Create Azure Storage Queue in the Azure portal)")]),e._v(" "),r("p",[e._v("Okay. Now that we have a queue in Azure, we can create the Azure Function. We'll do that with the Azure CLI:")]),e._v(" "),r("ol",[r("li",[e._v("Open the Azure CLI on your local machine")]),e._v(" "),r("li",[e._v("We need to install the "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-functions/functions-run-local?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Functions Core Tools"),r("OutboundLink")],1),e._v(" to be able to create functions and deploy them to AKS. You can install the tools with this command:")])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("npm install -g azure-functions-core-tools@3\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("ol",{attrs:{start:"3"}},[r("li",[e._v("Once the tools are installed, we'll create a directory that we will use to create the Azure Function in:")])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("mkdir myfunction\ncd myfunction\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br")])]),r("ol",{attrs:{start:"4"}},[r("li",[e._v("Alright. The following command creates a containerized Azure Function app in the folder that we've just created, using the Functions Core Tools:")])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("func init --docker\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("ol",{attrs:{start:"5"}},[r("li",[e._v("The process will ask you to select the worker runtime. Select "),r("strong",[e._v("dotnet")]),e._v(". This creates the Function app with .NET")]),e._v(" "),r("li",[e._v("If you run "),r("strong",[e._v("dir")]),e._v(", you'll see that we now have Azure Function files and a Docker file for the container")]),e._v(" "),r("li",[e._v("Next, we'll create a new Function in the Function App that we've just created (Function Apps contain one or more Functions). We can create a new Function with the command:")])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("func new\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("ol",{attrs:{start:"8"}},[r("li",[e._v("You'll be asked what type trigger the Function should have. Select the "),r("strong",[e._v("QueueTrigger")])]),e._v(" "),r("li",[e._v("Next, type in a "),r("strong",[e._v("name")]),e._v(" for the Function. I'll use "),r("strong",[e._v("QueueFunction")]),e._v(". And that's it, the Function is created")])]),e._v(" "),r("p",[e._v("Now that we have a containerized Function App with a QueueTrigger Function in it, let's take a look at it in Visual Studio and add a connection string to the Azure Storage Queue:")]),e._v(" "),r("ol",[r("li",[e._v("Open the "),r("strong",[e._v("myfunction")]),e._v(" folder that contains the Function App and Function")]),e._v(" "),r("li",[e._v("In the folder, you'll find a "),r("strong",[e._v("Visual Studio project file")]),e._v(". Open it with Visual Studio (or "),r("a",{attrs:{href:"https://code.visualstudio.com?WT.mc_id=other-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("VS Code"),r("OutboundLink")],1),e._v(")")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/63function.png")}}),e._v(" "),r("p",[e._v("(Azure Function in Visual Studio)")]),e._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[e._v("In Visual Studio, you can see the Docker file of the Function App. This uses the Azure Functions Runtime to run the Function. There is also a "),r("strong",[e._v("local.settings.json")]),e._v(" file. Open it")]),e._v(" "),r("li",[e._v("Create a new setting in the "),r("strong",[e._v("local.settings.json")]),e._v(" file called "),r("strong",[e._v("storageconnection")]),e._v(". Make the value of this setting the "),r("strong",[e._v("connection string to Azure Storage")]),e._v(". You can find this in the Azure Storage Account in the Azure portal, under the Access Keys menu")]),e._v(" "),r("li",[e._v("Go to the function code file. In my case, this is "),r("strong",[e._v("QueueFunction.cs")]),e._v(". Here, change the values in the QueueTrigger attribute\na. Replace the "),r("strong",[e._v('"myqueue-items"')]),e._v(" string by the "),r("strong",[e._v("name of the queue")]),e._v(" that we've created in Azure Storage\nb. Put in the name "),r("strong",[e._v('"storageconnection"')]),e._v(" for the Connection parameter")])]),e._v(" "),r("p",[e._v("That's it. The Function is now connected to the Azure Storage Queue. Let's compile the function using the Azure CLI:")]),e._v(" "),r("ol",[r("li",[e._v("Open the Azure CLI")]),e._v(" "),r("li",[e._v("Make sure that you are in the "),r("strong",[e._v("myfunction")]),e._v(" folder where the Function App is")]),e._v(" "),r("li",[e._v("Also make sure that you have connected your Docker account to your local machine by using:")])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("docker login\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("ol",{attrs:{start:"3"}},[r("li",[e._v("Now use the following command to build the container with the Function App in it. The myfunctionapp:v1 represents the name of the container and the tag (v1):")])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("docker build -t myfunctionapp:v1 .\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("The Function App should build and the container should be created now. With this last step, we've made sure that the Function compiles into a container.")]),e._v(" "),r("h4",{attrs:{id:"conclusion"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),r("p",[e._v("In this post, we've created a containerized "),r("a",{attrs:{href:"https://azure.microsoft.com/services/functions?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Function"),r("OutboundLink")],1),e._v(" App with a queue-based trigger in it, on our local machine using the "),r("a",{attrs:{href:"https://docs.microsoft.com/cli/azure/?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure CLI"),r("OutboundLink")],1),e._v(" and the "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-functions/functions-run-local?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Functions Core Tools"),r("OutboundLink")],1),e._v(". In the next post, we'll deploy the container with the Azure Function in it to "),r("a",{attrs:{href:"https://azure.microsoft.com/services/kubernetes-service?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Kubernetes Service"),r("OutboundLink")],1),e._v(" and run it at scale with "),r("a",{attrs:{href:"https://keda.sh?WT.mc_id=other-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("KEDA"),r("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=a.exports}}]);