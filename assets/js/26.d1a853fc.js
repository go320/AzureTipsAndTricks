(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{381:function(s,t,a){"use strict";a.r(t);var n=a(42),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("💡 Learn more : "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/iot-hub/about-iot-hub?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[s._v("Azure IoT Hub Overview"),a("OutboundLink")],1),s._v(".")])]),s._v(" "),a("h4",{attrs:{id:"easily-send-json-to-iot-hub-with-c"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#easily-send-json-to-iot-hub-with-c"}},[s._v("#")]),s._v(" Easily Send JSON to IoT Hub with C#")]),s._v(" "),a("p",[s._v("I recently needed to send JSON that an IoT Hub could receive and display on an AZ3166 device. Once the AZ3166 device receives the message, then it could do a number of things with the data such as open an door.")]),s._v(" "),a("p",[s._v("Part 1:")]),s._v(" "),a("ul",[a("li",[s._v("Create an IoT Hub and provision the MX Chip (AZ3166) as a device. While we could go into the Azure Portal and create a new IoT Hub and walk through the setup of our device, etc. There is an easier way.")]),s._v(" "),a("li",[a("a",{attrs:{href:"https://docs.microsoft.com/azure/iot-hub/iot-hub-arduino-iot-devkit-az3166-get-started#prepare-the-development-environment?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[s._v("Download the tools"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("Open "),a("strong",[s._v("VS Code")]),s._v(", look under "),a("strong",[s._v("Arduino Examples")]),s._v(" and open the "),a("strong",[s._v("GetStarted")]),s._v(" sample and run "),a("code",[s._v("task cloud-provision")]),s._v(" in the VS Code terminal..")])]),s._v(" "),a("img",{attrs:{src:s.$withBase("/files/aziothub1.png")}}),s._v(" "),a("ul",[a("li",[s._v("If you switch over to the Azure Portal, and look under your new IoT, then Devices - you should see your new device.")])]),s._v(" "),a("img",{attrs:{src:s.$withBase("/files/aziothub2.png")}}),s._v(" "),a("p",[s._v("Part 2:")]),s._v(" "),a("ul",[a("li",[s._v("I took the code from the “GetStarted” sample found in VS Code and tweaked the "),a("code",[s._v('Screen.print(0, "Unlock Door");')]),s._v(" lines in the "),a("code",[s._v("GetStarted.ino")]),s._v(" file in the "),a("code",[s._v("Setup")]),s._v(" method.")]),s._v(" "),a("li",[s._v("Now on my deivce it prints the “Unlock Door” message in fancy yellow and displays the IP Address and waits for a message to be sent to IoT Hub.")])]),s._v(" "),a("img",{attrs:{src:s.$withBase("/files/aziothub3.png")}}),s._v(" "),a("p",[s._v("Part 3:")]),s._v(" "),a("ul",[a("li",[s._v("Open Visual Studio and create a console application.")]),s._v(" "),a("li",[s._v("Add NuGet package : Microsoft.Azure.Devices (Service SDK for Azure IoT Hub)")]),s._v(" "),a("li",[s._v("I hardcoded my connection string (found in IoT Hub) and mocked the JSON data.")])]),s._v(" "),a("div",{staticClass:"language-csharp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("System"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Collections"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Generic")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("System"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Linq")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("System"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("System"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Threading"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Tasks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("Microsoft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Azure"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Devices")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("namespace")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("SendMessageToIoTHub")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Program")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ServiceClient")]),s._v(" serviceClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")])]),s._v(" connectionString "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mykey"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            serviceClient "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ServiceClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("CreateFromConnectionString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("connectionString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("SendCloudToDeviceMessageAsync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Wait")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            Console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ReadLine")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("async")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("static")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s._v("Task")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("SendCloudToDeviceMessageAsync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("string")])]),s._v(" mockedJsonData "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{ \\"Locked\\":true}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n            "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" commandMessage "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[s._v("Message")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Encoding"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ASCII"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("GetBytes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("mockedJsonData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("await")]),s._v(" serviceClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("SendAsync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"AZ3166"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" commandMessage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br")])]),a("p",[s._v("Part 4:")]),s._v(" "),a("ul",[a("li",[s._v("The MX Board receives the message from IoT Hub")]),s._v(" "),a("li",[s._v("It prints the JSON message from the serviceClient code above to the board display.")])]),s._v(" "),a("img",{attrs:{src:s.$withBase("/files/aziothub4.png")}})])}),[],!1,null,null,null);t.default=e.exports}}]);