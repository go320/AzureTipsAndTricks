(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{488:function(e,t,r){"use strict";r.r(t);var s=r(42),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("💡 Learn more : "),r("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/virtual-network/manage-network-security-group/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Network Security Groups"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("This post was brought to you by "),r("strong",[r("a",{attrs:{href:"https://twitter.com/kumarallamraju",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kumar Allamraju"),r("OutboundLink")],1)]),e._v(".")]),e._v(" "),r("p",[e._v("Have you ever wondered that your NSG blade was cluttered with too many Network Security Groups? See my NSG blade.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/file1-nsg.png")}}),e._v(" "),r("p",[e._v("Shocking huh? This list was even bigger in my customer's environment. When you create a new Virtual Machine from Azure Portal or CLI, a new network security group is created for each VM. This is by design. However there's a way to specify an existing NSG assuming you want to apply the same inbound and outbound rules for a group of virtual machines.")]),e._v(" "),r("p",[e._v('This can be done by choosing the Advanced option in the Networking tab. The default option is "None".')]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/file2-nsg.png")}}),e._v(" "),r("p",[e._v('When you select Advanced option, you will have an option to select the existing NSGs. I have created a network security group called "mynsg1" with a set of inbound and outbound rules prior to creating a VM. See the screenshot below.')]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/file3-nsg.png")}}),e._v(" "),r("p",[e._v("In this case, I'm allowing access to my VMs only from my Home and Office IPs. You can further fine tune the NGSG by the protocol and specific ports and re-use the same NSG.")]),e._v(" "),r("p",[e._v("When you create a VM using az CLI, you have an option to specify the NSG. See below.")]),e._v(" "),r("p",[e._v("The following example creates a simple Ubuntu Linux VM with a public IP address, DNS entry, wih an existing NSG, two data disks (10GB and 20GB), and then generates ssh key pairs.")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("az vm create -n MyVm -g MyResourceGroup --nsg mynsg1 --public-ip-address-dns-name MyUniqueDnsName --image ubuntults --data-disk-sizes-gb 10 20 --size Standard_DS2_v2 \\\n--generate-ssh-keys\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br")])]),r("p",[e._v("Now if you want to apply this NSG to all your VMs that shares the same set of allow/deny rules, you can stop the VM, go to the vNet blade attached to your VM, click on the device under Connected Devices, under Network Security Group blade click on Edit icon and select the new NSG that was created above and restart your VM(s). The same rule applies to existing VMs as well.")]),e._v(" "),r("h4",{attrs:{id:"conclusion"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),r("p",[e._v("Network Security Groups is an important feature in Azure Virtual Networking that allows you to filter traffic to and from Internet and across Azure resources. The intent of this article is to share a quick Azure tip but NSG shouldn't be used as a first line of defense to your Azure resources.")]),e._v(" "),r("ul",[r("li",[r("p",[r("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-vnet-plan-design-arm/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Virtual Networks"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://docs.microsoft.com/en-us/cli/azure/network/nsg?view=azure-cli-latest/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("az CLI nsg"),r("OutboundLink")],1)])])])])}),[],!1,null,null,null);t.default=a.exports}}]);