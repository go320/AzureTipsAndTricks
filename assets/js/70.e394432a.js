(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{425:function(e,t,a){"use strict";a.r(t);var r=a(42),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("💡 Learn more : "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-functions/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Functions Documentation"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h4",{attrs:{id:"create-thumbnail-images-with-azure-functions-and-azure-storage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-thumbnail-images-with-azure-functions-and-azure-storage"}},[e._v("#")]),e._v(" Create Thumbnail Images with Azure Functions and Azure Storage")]),e._v(" "),a("p",[e._v("In this mini-series, we're going to create an Azure Function that detects when a new image is added to Azure Storage and automatically creates a thumbnail image for us.")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/blog/tip157.html"}},[e._v("Azure Tips and Tricks Part 157 - Part 1 Create Thumbnail Images with Azure Functions and Azure Storage")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/blog/tip158.html"}},[e._v("Azure Tips and Tricks Part 158 - Part 2 Create Thumbnail Images with Azure Functions and Azure Storage")])],1)]),e._v(" "),a("h4",{attrs:{id:"part-1-setup-azure-portal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#part-1-setup-azure-portal"}},[e._v("#")]),e._v(" Part 1 (Setup) Azure Portal")]),e._v(" "),a("p",[e._v("Go ahead and open the "),a("strong",[e._v("Azure Portal")]),e._v(" and click "),a("strong",[e._v("Create a Resource")]),e._v(" and select "),a("strong",[e._v("Azure Storage")]),e._v(". We’ll keep it simple as shown below to get started.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/imageresizer1.png")}}),e._v(" "),a("p",[e._v("Once complete, go into the resource and look under "),a("strong",[e._v("Services")]),e._v(".")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/storageacct2.png")}}),e._v(" "),a("p",[e._v("Go ahead and click on "),a("strong",[e._v("Blobs")]),e._v(" and create a "),a("strong",[e._v("Container")]),e._v(" and give it the name "),a("strong",[e._v("originals")]),e._v(" and then create another one called "),a("strong",[e._v("thumbs")]),e._v(".")]),e._v(" "),a("p",[a("strong",[e._v("Remember this!")]),e._v(" Think of a container in this sense as a folder. https://myblob/"),a("strong",[e._v("container")]),e._v("/image1.jpg")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/imageresizer2.png")}}),e._v(" "),a("p",[e._v("We're going to need our Access Key shortly, so look under "),a("strong",[e._v("Settings")]),e._v(", then "),a("strong",[e._v("Access Keys")]),e._v(" and copy the "),a("strong",[e._v("connection string")]),e._v(" to your clipboard.")]),e._v(" "),a("p",[a("strong",[e._v("What is an Access Key?")]),e._v(" This string will allow us to connect to the Storage Account.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/storagethroughcsharp1.png")}}),e._v(" "),a("h4",{attrs:{id:"part-2-setup-visual-studio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#part-2-setup-visual-studio"}},[e._v("#")]),e._v(" Part 2 (Setup) Visual Studio")]),e._v(" "),a("p",[e._v("Create a C# Azure Function application by opening Visual Studio and selecting the template under the "),a("strong",[e._v("Cloud")]),e._v(" node as shown below:")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/imageresizer3.png")}}),e._v(" "),a("p",[e._v("Under Storage, change the default emulator to the "),a("strong",[e._v("Azure Storage Account")]),e._v(" that we created earlier:")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/imageresizer4.png")}}),e._v(" "),a("p",[e._v("We'll begin by using the "),a("strong",[e._v("Timer Trigger")]),e._v(" and "),a("strong",[e._v("Azure Function v1")]),e._v(" leaving everything as the defaults.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/imageresizer5.png")}}),e._v(" "),a("p",[e._v("Once the project spins up, we'll use NuGet to pull in references to :")]),e._v(" "),a("ul",[a("li",[e._v("ImageResizer "),a("code",[e._v("A helper class for Image Resizing")])])]),e._v(" "),a("p",[e._v("Looking good so far and a good stopping point for today. Come back soon for the next post in the series where we'll begin putting this all together.")])])}),[],!1,null,null,null);t.default=s.exports}}]);