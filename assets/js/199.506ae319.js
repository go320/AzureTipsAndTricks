(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{554:function(e,s,t){"use strict";t.r(s);var a=t(42),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("🔥 Make sure you "),t("a",{attrs:{href:"http://azuredev.tips?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("star the repo"),t("OutboundLink")],1),e._v(" to keep up to date with new tips and tricks.")]),e._v(" "),t("p",[e._v("💡 Learn more : "),t("a",{attrs:{href:"https://azure.microsoft.com/services/key-vault?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Microsoft Azure Key Vault"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("📺 Watch the video : "),t("a",{attrs:{href:"https://azure.microsoft.com/resources/videos/azure-key-vault-developer-quick-start/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Getting started with Azure Key Vault"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("h4",{attrs:{id:"using-secrets-in-scripts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-secrets-in-scripts"}},[e._v("#")]),e._v(" Using secrets in scripts")]),e._v(" "),t("p",[e._v("When you write deployment scripting you often need secrets / passwords. Using these secrets is often done by using variables and storing the plain text password or secure object (which is still security through obscurity). In some cases people parameterize the values and have to input the secrets / passwords upon runtime. If you're working with a large number of secrets the latter can be quite time consuming.")]),e._v(" "),t("h4",{attrs:{id:"_1-leveraging-the-azure-key-vault"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-leveraging-the-azure-key-vault"}},[e._v("#")]),e._v(" 1. Leveraging the Azure Key Vault")]),e._v(" "),t("p",[e._v("When using Microsoft Azure, it's a best practice to store your secrets in the Azure Key Vault. This can also be done when scripting your deployments. If you're deploying ARM Templates, you can query the key vault directly during the deployment ("),t("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-resource-manager/templates/key-vault-parameter?tabs=azure-cli",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.microsoft.com/azure/azure-resource-manager/templates/key-vault-parameter?tabs=azure-cli"),t("OutboundLink")],1),e._v(") and this is often the most secure way.")]),e._v(" "),t("p",[e._v("However, sometimes you're just not deploying using ARM templates or you're using a combination of tools. Maybe you're not even deploying to Azure and you just need a place to store your secrets. Key Vault is there for you 😃")]),e._v(" "),t("h4",{attrs:{id:"_2-code-samples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-code-samples"}},[e._v("#")]),e._v(" 2. Code samples")]),e._v(" "),t("p",[e._v("Note that the code requires you to be logged in to Azure using either Azure PowerShell or Azure CLI (depending on your preference).")]),e._v(" "),t("h5",{attrs:{id:"powershell-version"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#powershell-version"}},[e._v("#")]),e._v(" PowerShell version")]),e._v(" "),t("p",[e._v('The following code will retrieve all the secrets from your Azure KeyVault and store them in the hash table "'),t("em",[e._v("$keys")]),e._v('".')]),e._v(" "),t("p",[e._v('Upon successful execution you can request the secrets from the table by simple parsing "'),t("em",[e._v("$keys.NameOfYourKeyVaultSecret")]),e._v('"')]),e._v(" "),t("p",[e._v('For example "'),t("em",[e._v("$keys.storageAccountkey")]),e._v('" would return the secret value of the "storageAccountKey" as stored in the Azure KeyVault.')]),e._v(" "),t("div",{staticClass:"language-powershell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$keyvaultName")]),e._v(" = "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'KeyVaultName'")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$secrets")]),e._v(" = "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("Get-AzKeyVaultSecret")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("VaultName "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$keyvaultName")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$keys")]),e._v(" =@"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("foreach")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$secret")]),e._v(" in "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$secrets")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$secretName")]),e._v(" = "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$secret")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("name\n\n        "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$key")]),e._v(" = "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("Get-AzKeyVaultSecret")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("VaultName "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$keyvaultName")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("name "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$secretName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("SecretValueText\n        "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$keys")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Add"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$secretName")]),e._v('"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$key")]),e._v('"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br")])]),t("h5",{attrs:{id:"azure-cli-version"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#azure-cli-version"}},[e._v("#")]),e._v(" Azure CLI version")]),e._v(" "),t("p",[e._v("The following code will retrieve all the secrets from your Azure KeyVault and store them in the associative array, secrets. Associative arrays were introduced with Bash version 4.")]),e._v(" "),t("p",[e._v("Upon successful execution you can request the secrets from the table by simple parsing "),t("code",[e._v("${secrets[NameOfYourKeyVaultSecret]}")]),e._v(".")]),e._v(" "),t("p",[e._v("For example "),t("code",[e._v("${secrets[storageAccountKey]}")]),e._v(' would return the secret value of the "storageAccountKey" as stored in the Azure KeyVault.')]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("keyvaultName")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'KeyVaultName'")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("declare")]),e._v(" -A secrets\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("for")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[e._v("name")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("az keyvault secret list --vault-name $keyvaultName --query "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"[].name"')]),e._v(" --output tsv"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("do")]),e._v("\n  secrets"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"'),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$name")]),e._v('"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("az keyvault secret show --name $name --vault-name $keyvaultName --query value --output tsv"),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("done")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);