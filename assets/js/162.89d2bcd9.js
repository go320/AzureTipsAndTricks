(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{517:function(e,t,r){"use strict";r.r(t);var o=r(42),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("🔥 Follow me on "),r("a",{attrs:{href:"https://twitter.com/mbcrump",target:"_blank",rel:"noopener noreferrer"}},[e._v("Twitter"),r("OutboundLink")],1),e._v(" for daily software updates.")]),e._v(" "),r("p",[e._v("💡 Learn more : "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/sentinel/overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Sentinel overview"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("📺 Watch the video : "),r("a",{attrs:{href:"https://www.youtube.com/watch?v=dRpOR2GpL1s&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=4&t=0s?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("What is Azure Sentinel and why you should care"),r("OutboundLink")],1)])]),e._v(" "),r("h4",{attrs:{id:"the-cloud-offers-advanced-security"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#the-cloud-offers-advanced-security"}},[e._v("#")]),e._v(" The cloud offers advanced security")]),e._v(" "),r("p",[e._v("Application and infrastructure security is extremely important to get right. There are many aspects to security, including closing and opening the right data ports and protecting data and accounts. Other aspects of security are probably more difficult to implement and use. These are the detection and handling of security incidents and threats.")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://docs.microsoft.com/azure/sentinel/overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Sentinel"),r("OutboundLink")],1),e._v(" provides a threat detection and mitigation service that helps you to detect incidents and threats when they happen and helps you to solve them as effectively as possible. In this post, we'll explore what Azure Sentinel is and how you can use it to protect your organization.")]),e._v(" "),r("h4",{attrs:{id:"prerequisites"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),r("p",[e._v("If you want to follow along, you'll need the following:")]),e._v(" "),r("ul",[r("li",[e._v("An Azure subscription (If you don't have an Azure subscription, create a "),r("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("free account"),r("OutboundLink")],1),e._v(" before you begin)")])]),e._v(" "),r("h4",{attrs:{id:"what-is-azure-sentinel"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#what-is-azure-sentinel"}},[e._v("#")]),e._v(" What is Azure Sentinel?")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://docs.microsoft.com/azure/sentinel/overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Sentinel"),r("OutboundLink")],1),e._v(" is a "),r("strong",[e._v("SIEM (security information event management)")]),e._v(" and "),r("strong",[e._v("SOAR (security orchestration automated response)")]),e._v(" system in Azure. This means that it can detect security incidents and threats and alert on them. And that you can use it to investigate and mitigate threats.\nAzure Sentinel can collect data from all sorts of data sources, like the "),r("a",{attrs:{href:"https://azure.microsoft.com/services/security-center/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Security Center"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://azure.microsoft.com/services/active-directory/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Active Directory"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://www.office.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Office 365"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://aws.amazon.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Amazon Web Services"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://www.cyberark.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CyberArk"),r("OutboundLink")],1),e._v(" and more. It can detect incidents in the data from those data sources and alert you that something needs your attention. You can get insights into the raw data and potential malicious events and incidents through overviews, dashboards and custom queries. And once an incident occurs, you can choose to have it trigger an "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/sentinel/tutorial-respond-threats-playbook?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Sentinel Playbook"),r("OutboundLink")],1),e._v(", which is a "),r("a",{attrs:{href:"https://azure.microsoft.com/services/logic-apps/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Logic App"),r("OutboundLink")],1),e._v(", that initiates a process of automatic mitigation.")]),e._v(" "),r("p",[e._v("And maybe the best part of Azure Sentinel is that it is a native part of Azure. This means that it is scalable, always available and that it is secure. Let's learn more by using Azure Sentinel.")]),e._v(" "),r("h4",{attrs:{id:"getting-started-with-azure-sentinel"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-with-azure-sentinel"}},[e._v("#")]),e._v(" Getting started with Azure Sentinel")]),e._v(" "),r("p",[e._v("Azure Sentinel is part of your Azure subscription and uses an "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-monitor/learn/quick-create-workspace?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Log Analytics Workspace"),r("OutboundLink")],1),e._v(" for its data. Let's set it up and see how we can work with it:")]),e._v(" "),r("ol",[r("li",[e._v("Go to the "),r("a",{attrs:{href:"https://portal.azure.com/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure portal"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("In the searchbox in the top, type "),r("strong",[e._v("Sentinel")]),e._v(". This will show the result for Azure Sentinel. Click on the result")]),e._v(" "),r("li",[e._v("You can now add a Log Analytics Workspace to Azure Sentinel. Let's create a new workspace. "),r("strong",[e._v("Click Add > Create a new workspace")]),e._v("\na. Fill in a "),r("strong",[e._v("name")]),e._v(" for the Log Analytics Workspace\nb. Select an existing "),r("strong",[e._v("Resource group")]),e._v(" or create a new one\nc. Select a "),r("strong",[e._v("Location")]),e._v("\nd. Click "),r("strong",[e._v("OK")]),e._v(" to create the workspace")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/39createlogworkspace.png")}}),e._v(" "),r("p",[e._v("(Create a new Log Analytics Workspace in the Azure portal)")]),e._v(" "),r("ol",{attrs:{start:"4"}},[r("li",[e._v("When the workspace is created, click "),r("strong",[e._v("Add Azure Sentinel")]),e._v(" to add the workspace to Azure Sentinel. When this is done, you'll see the Azure Sentinel overview")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/39overview.png")}}),e._v(" "),r("p",[e._v("(Azure Sentinel overview in the Azure portal)")]),e._v(" "),r("ol",{attrs:{start:"5"}},[r("li",[e._v("To start gathering security information, we need to connect data sources to Azure Sentinel. Click the "),r("strong",[e._v("Connect")]),e._v(" button under the "),r("strong",[e._v("1. Collect data")]),e._v(" message")]),e._v(" "),r("li",[e._v("Let's connect "),r("strong",[e._v("Azure Active Directory")]),e._v(" to Azure Sentinel. This will feed it with data about logins and other active directory activity. Click on "),r("strong",[e._v("Azure Active Directory")]),e._v(" and click on the "),r("strong",[e._v("Open connector page")]),e._v(" button")]),e._v(" "),r("li",[e._v("Simply click the "),r("strong",[e._v("Connect")]),e._v(" buttons for the sign-in logs and the audit logs to connect Azure Active Directory")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/39connecttoaad.png")}}),e._v(" "),r("p",[e._v("(Connect Azure Active Directory to Azure Sentinel)")]),e._v(" "),r("ol",{attrs:{start:"8"}},[r("li",[e._v("After a while, events, and possibly incidents, will appear in the "),r("strong",[e._v("Overview")]),e._v(", like in the image below:")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/39events.png")}}),e._v(" "),r("p",[e._v("(Events in the Azure Sentinel overview)")]),e._v(" "),r("ol",{attrs:{start:"9"}},[r("li",[e._v("To get more insights into these events, we can add specific dashboards. Click on the "),r("strong",[e._v("Dashboards menu-item")])]),e._v(" "),r("li",[e._v("There are a lot of dashboards to choose from. As we are collecting Azure Active Directory data, let's visualize that. Choose the "),r("strong",[e._v("Azure AD Audit logs")]),e._v(" dashboard and click "),r("strong",[e._v("Install")])]),e._v(" "),r("li",[e._v("Now click "),r("strong",[e._v("View Dashboard")]),e._v(" to view the dashboard. This shows all sorts of information, like how many Active Directory activities there were in a given time period and if they were successful or not. This helps you to find possible threats. Azure Sentinel offers more tools to identify threats. Like queries that you can run on your data in the "),r("strong",[e._v('"Hunting"')]),e._v(" feature and working with "),r("a",{attrs:{href:"https://notebooks.azure.com/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Notebooks"),r("OutboundLink")],1),e._v(" to hunt for security threats")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/39dashboard.png")}}),e._v(" "),r("p",[e._v("(Azure AD Dashboard in the Azure Sentinel overview)")]),e._v(" "),r("ol",{attrs:{start:"12"}},[r("li",[e._v("Azure Sentinel provides a way to automate a workflow around the information that you receive by creating "),r("strong",[e._v('"Playbooks"')]),e._v(". This allows you to, for instance, send an e-mail or a Slack message when something happened. Click on the "),r("strong",[e._v("Playbooks menu-item")])]),e._v(" "),r("li",[e._v("Click "),r("strong",[e._v("Add Playbook")]),e._v(" to get started. Playbooks are Azure Logic Apps. So the Logic App Create blade opens\na. Fill in a "),r("strong",[e._v("name")]),e._v(" for the playbook Logic App\nb. Select an existing "),r("strong",[e._v("Resource group")]),e._v(" or create a new one\nc. Choose a "),r("strong",[e._v("Location")]),e._v("\nd. Click "),r("strong",[e._v("Create")])]),e._v(" "),r("li",[e._v("When the Logic App is created, the Logic App Designer opens. You can choose to create a Logic App from scratch or begin with a template. Click the template "),r("strong",[e._v("Get a notification email when Security Center creates a recommendation")])]),e._v(" "),r("li",[e._v("We only have to configure the "),r("strong",[e._v("Send a notification email")]),e._v(" step of this template. Click the "),r("strong",[e._v("Sign in")]),e._v(" button to sign in with your Office 365 account an authorize the Logic App to send emails on your behalf")]),e._v(" "),r("li",[e._v("Fill in an email-address in the "),r("strong",[e._v("To")]),e._v(" field. This is the address that gets notified when Azure Security Center creates a new recommendation. You can leave the Subject and Body fields as they are")]),e._v(" "),r("li",[e._v("Click "),r("strong",[e._v("Save")]),e._v(" to save the Logic App")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/39playbook.png")}}),e._v(" "),r("p",[e._v("(Azure Sentinel Playbook in the Azure portal)")]),e._v(" "),r("h4",{attrs:{id:"conclusion"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://docs.microsoft.com/azure/sentinel/overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Sentinel"),r("OutboundLink")],1),e._v(" helps you to detect, "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/sentinel/quickstart-get-visibility?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("alert on"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/sentinel/tutorial-investigate-cases?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("investigate"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/sentinel/tutorial-respond-threats-playbook?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("resolve"),r("OutboundLink")],1),e._v(" security incidents quickly. It provides many ways to collect and analyze data and provides flexible tools for mitigating threats. And you can do all of that without ever leaving the Azure portal. Go and check it out!")])])}),[],!1,null,null,null);t.default=n.exports}}]);