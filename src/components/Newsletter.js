import React from "react"
import { css } from "@xstyled/styled-components"

function createMarkup() {
  return {
    __html: `
    <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
    <form action="https://app.convertkit.com/forms/1281930/subscriptions" class="seva-form formkit-form" method="post" data-sv-form="1281930" data-uid="73b9d5c6cc" data-version="5" data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;Success! Now check your email to confirm your subscription.&quot;,&quot;redirect_url&quot;:&quot;&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:true,&quot;url&quot;:&quot;https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}" min-width="400 500 600 700 800" style="background-color: rgb(255, 255, 255); border-radius: 6px;"><div data-style="full"><div data-element="column" class="formkit-background" style="background-image: url(&quot;//pages.convertkit.com/assets/charlotte/bg.jpg&quot;);"></div><div data-element="column" class="formkit-column"><div class="formkit-header" data-element="header" style="color: rgb(83, 83, 83); font-size: 28px; font-weight: 700;"><h1>订阅最新内容</h1></div><ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul><div data-element="fields" class="seva-fields formkit-fields"><div class="formkit-field"><input class="formkit-input" aria-label="姓名" name="fields[first_name]" placeholder="姓名" type="text" style="color: rgb(139, 139, 139); border-color: rgb(221, 224, 228); font-weight: 400;"></div><div class="formkit-field"><input class="formkit-input" name="email_address" placeholder="邮箱" required="" type="email" style="color: rgb(139, 139, 139); border-color: rgb(221, 224, 228); font-weight: 400;"></div><button data-element="submit" class="formkit-submit formkit-submit" style="color: rgb(255, 255, 255); background-color: rgb(213, 69, 116); border-radius: 3px; font-weight: 700;"><div class="formkit-spinner"><div></div><div></div><div></div></div><span>订阅</span></button></div><div class="formkit-disclaimer" data-element="disclaimer" style="color: rgb(139, 139, 139); font-size: 13px;"><p>我们尊重你的隐私，你可以随时取消订阅。</p></div><a href="https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form" class="formkit-powered-by" data-element="powered-by" target="_blank" rel="noopener noreferrer">Powered By ConvertKit</a></div></div><style>.formkit-form[data-uid="73b9d5c6cc"] *{box-sizing:border-box;}.formkit-form[data-uid="73b9d5c6cc"]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}.formkit-form[data-uid="73b9d5c6cc"] legend{border:none;font-size:inherit;margin-bottom:10px;padding:0;position:relative;display:table;}.formkit-form[data-uid="73b9d5c6cc"] fieldset{border:0;padding:0.01em 0 0 0;margin:0;min-width:0;}.formkit-form[data-uid="73b9d5c6cc"] body:not(:-moz-handler-blocked) fieldset{display:table-cell;}.formkit-form[data-uid="73b9d5c6cc"] h1,.formkit-form[data-uid="73b9d5c6cc"] h2,.formkit-form[data-uid="73b9d5c6cc"] h3,.formkit-form[data-uid="73b9d5c6cc"] h4,.formkit-form[data-uid="73b9d5c6cc"] h5,.formkit-form[data-uid="73b9d5c6cc"] h6{color:inherit;font-size:inherit;font-weight:inherit;}.formkit-form[data-uid="73b9d5c6cc"] p{color:inherit;font-size:inherit;font-weight:inherit;}.formkit-form[data-uid="73b9d5c6cc"] ol:not([template-default]),.formkit-form[data-uid="73b9d5c6cc"] ul:not([template-default]),.formkit-form[data-uid="73b9d5c6cc"] blockquote:not([template-default]){text-align:left;}.formkit-form[data-uid="73b9d5c6cc"] p:not([template-default]),.formkit-form[data-uid="73b9d5c6cc"] hr:not([template-default]),.formkit-form[data-uid="73b9d5c6cc"] blockquote:not([template-default]),.formkit-form[data-uid="73b9d5c6cc"] ol:not([template-default]),.formkit-form[data-uid="73b9d5c6cc"] ul:not([template-default]){color:inherit;font-style:initial;}.formkit-form[data-uid="73b9d5c6cc"][data-format="modal"]{display:none;}.formkit-form[data-uid="73b9d5c6cc"][data-format="slide in"]{display:none;}.formkit-form[data-uid="73b9d5c6cc"] .formkit-input,.formkit-form[data-uid="73b9d5c6cc"] .formkit-select,.formkit-form[data-uid="73b9d5c6cc"] .formkit-checkboxes{width:100%;}.formkit-form[data-uid="73b9d5c6cc"] .formkit-button,.formkit-form[data-uid="73b9d5c6cc"] .formkit-submit{border:0;border-radius:5px;color:#ffffff;cursor:pointer;display:inline-block;text-align:center;font-size:15px;font-weight:500;cursor:pointer;margin-bottom:15px;overflow:hidden;padding:0;position:relative;vertical-align:middle;}.formkit-form[data-uid="73b9d5c6cc"] .formkit-button:hover,.formkit-form[data-uid="73b9d5c6cc"] .formkit-submit:hover,.formkit-form[data-uid="73b9d5c6cc"] .formkit-button:focus,.formkit-form[data-uid="73b9d5c6cc"] .formkit-submit:focus{outline:none;}.formkit-form[data-uid="73b9d5c6cc"] .formkit-button:hover > span,.formkit-form[data-uid="73b9d5c6cc"] .formkit-submit:hover > span,.formkit-form[data-uid="73b9d5c6cc"] .formkit-button:focus > span,.formkit-form[data-uid="73b9d5c6cc"] .formkit-submit:focus > span{background-color:rgba(0,0,0,0.1);}.formkit-form[data-uid="73b9d5c6cc"] .formkit-button > span,.formkit-form[data-uid="73b9d5c6cc"] .formkit-submit > span{display:block;-webkit-transition:all 300ms ease-in-out;transition:all 300ms ease-in-out;padding:12px 24px;}.formkit-form[data-uid="73b9d5c6cc"] .formkit-input{background:#ffffff;font-size:15px;padding:12px;border:1px solid #e3e3e3;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;line-height:1.4;margin:0;-webkit-transition:border-color ease-out 300ms;transition:border-color ease-out 300ms;}.formkit-form[data-uid="73b9d5c6cc"] .formkit-input:focus{outline:none;border-color:#1677be;-webkit-transition:border-color ease 300ms;transition:border-color ease 300ms;}.formkit-form[data-uid="73b9d5c6cc"] .formkit-input::-webkit-input-placeholder{color:inherit;opacity:0.8;}.formkit-form[data-uid="73b9d5c6cc"] .formkit-input::-moz-placeholder{color:inherit;opacity:0.8;}.formkit-form[data-uid="73b9d5c6cc"] .formkit-input:-ms-input-placeholder{color:inherit;opacity:0.8;}.formkit-form[data-uid="73b9d5c6cc"] .formkit-input::placeholder{color:inherit;opacity:0.8;}.formkit-form[data-uid="73b9d5c6cc"] [data-group="dropdown"]{position:relative;display:inline-block;width:100%;}.formkit-form[data-uid="73b9d5c6cc"] [data-group="dropdown"]::before{content:"";top:calc(50% - 2.5px);right:10px;position:absolute;pointer-events:none;border-color:#4f4f4f transparent transparent transparent;border-style:solid;border-width:6px 6px 0 6px;height:0;width:0;z-index:999;}.formkit-form[data-uid="73b9d5c6cc"] [data-group="dropdown"] select{height:auto;width:100%;cursor:pointer;color:#333333;line-height:1.4;margin-bottom:0;padding:0 6px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-size:15px;padding:12px;padding-right:25px;border:1px solid #e3e3e3;background:#ffffff;}.formkit-form[data-uid="73b9d5c6cc"] [data-group="dropdown"] select:focus{outline:none;}.formkit-form[data-uid="73b9d5c6cc"] [data-group="checkboxes"]{text-align:left;margin:0;}.formkit-form[data-uid="73b9d5c6cc"] [data-group="checkboxes"] [data-group="checkbox"]{margin-bottom:10px;}.formkit-form[data-uid="73b9d5c6cc"] [data-group="checkboxes"] [data-group="checkbox"] *{cursor:pointer;}.formkit-form[data-uid="73b9d5c6cc"] [data-group="checkboxes"] [data-group="checkbox"]:last-of-type{margin-bottom:0;}.formkit-form[data-uid="73b9d5c6cc"] [data-group="checkboxes"] [data-group="checkbox"] input[type="checkbox"]{display:none;}.formkit-form[data-uid="73b9d5c6cc"] [data-group="checkboxes"] [data-group="checkbox"] input[type="checkbox"] + label::after{content:none;}.formkit-form[data-uid="73b9d5c6cc"] [data-group="checkboxes"] [data-group="checkbox"] input[type="checkbox"]:checked + label::after{border-color:#ffffff;content:"";}.formkit-form[data-uid="73b9d5c6cc"] [data-group="checkboxes"] [data-group="checkbox"] input[type="checkbox"]:checked + label::before{background:#10bf7a;border-color:#10bf7a;}.formkit-form[data-uid="73b9d5c6cc"] [data-group="checkboxes"] [data-group="checkbox"] label{position:relative;display:inline-block;padding-left:28px;}.formkit-form[data-uid="73b9d5c6cc"] [data-group="checkboxes"] [data-group="checkbox"] label::before,.formkit-form[data-uid="73b9d5c6cc"] [data-group="checkboxes"] [data-group="checkbox"] label::after{position:absolute;content:"";display:inline-block;}.formkit-form[data-uid="73b9d5c6cc"] [data-group="checkboxes"] [data-group="checkbox"] label::before{height:16px;width:16px;border:1px solid #e3e3e3;background:#ffffff;left:0px;top:3px;}.formkit-form[data-uid="73b9d5c6cc"] [data-group="checkboxes"] [data-group="checkbox"] label::after{height:4px;width:8px;border-left:2px solid #4d4d4d;border-bottom:2px solid #4d4d4d;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);left:4px;top:8px;}.formkit-form[data-uid="73b9d5c6cc"] .formkit-alert{background:#f9fafb;border:1px solid #e3e3e3;border-radius:5px;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;list-style:none;margin:25px auto;padding:12px;text-align:center;width:100%;}.formkit-form[data-uid="73b9d5c6cc"] .formkit-alert:empty{display:none;}.formkit-form[data-uid="73b9d5c6cc"] .formkit-alert-success{background:#d3fbeb;border-color:#10bf7a;color:#0c905c;}.formkit-form[data-uid="73b9d5c6cc"] .formkit-alert-error{background:#fde8e2;border-color:#f2643b;color:#ea4110;}.formkit-form[data-uid="73b9d5c6cc"] .formkit-spinner{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:0px;width:0px;margin:0 auto;position:absolute;top:0;left:0;right:0;width:0px;overflow:hidden;text-align:center;-webkit-transition:all 300ms ease-in-out;transition:all 300ms ease-in-out;}.formkit-form[data-uid="73b9d5c6cc"] .formkit-spinner > div{margin:auto;width:12px;height:12px;background-color:#fff;opacity:0.3;border-radius:100%;display:inline-block;-webkit-animation:formkit-bouncedelay-formkit-form-data-uid-73b9d5c6cc- 1.4s infinite ease-in-out both;animation:formkit-bouncedelay-formkit-form-data-uid-73b9d5c6cc- 1.4s infinite ease-in-out both;}.formkit-form[data-uid="73b9d5c6cc"] .formkit-spinner > div:nth-child(1){-webkit-animation-delay:-0.32s;animation-delay:-0.32s;}.formkit-form[data-uid="73b9d5c6cc"] .formkit-spinner > div:nth-child(2){-webkit-animation-delay:-0.16s;animation-delay:-0.16s;}.formkit-form[data-uid="73b9d5c6cc"] .formkit-submit[data-active] .formkit-spinner{opacity:1;height:100%;width:50px;}.formkit-form[data-uid="73b9d5c6cc"] .formkit-submit[data-active] .formkit-spinner ~ span{opacity:0;}.formkit-form[data-uid="73b9d5c6cc"] .formkit-powered-by[data-active="false"]{opacity:0.35;}@-webkit-keyframes formkit-bouncedelay-formkit-form-data-uid-73b9d5c6cc-{0%,80%,100%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}40%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}@keyframes formkit-bouncedelay-formkit-form-data-uid-73b9d5c6cc-{0%,80%,100%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}40%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}.formkit-form[data-uid="73b9d5c6cc"] blockquote{padding:10px 20px;margin:0 0 20px;border-left:5px solid #e1e1e1;} .formkit-form[data-uid="73b9d5c6cc"]{box-shadow:0 0px 2px rgba(0,0,0,0.15);max-width:700px;overflow:hidden;}.formkit-form[data-uid="73b9d5c6cc"] [data-style="full"]{width:100%;display:block;}.formkit-form[data-uid="73b9d5c6cc"] .formkit-background{background-position:center center;background-size:cover;min-height:200px;}.formkit-form[data-uid="73b9d5c6cc"] .formkit-column{padding:20px;position:relative;}.formkit-form[data-uid="73b9d5c6cc"] .formkit-header{margin-top:0;margin-bottom:20px;}.formkit-form[data-uid="73b9d5c6cc"] .formkit-field{margin:0 0 10px 0;}.formkit-form[data-uid="73b9d5c6cc"] .formkit-input{width:100%;border-left:none;border-right:none;border-top:none;padding-left:0;padding-right:0;}.formkit-form[data-uid="73b9d5c6cc"] .formkit-fields .formkit-submit{margin-top:15px;width:100%;}.formkit-form[data-uid="73b9d5c6cc"] .formkit-disclaimer{margin:0 0 15px 0;}.formkit-form[data-uid="73b9d5c6cc"] .formkit-disclaimer > p{margin:0;}.formkit-form[data-uid="73b9d5c6cc"] .formkit-powered-by{color:#7d7d7d;display:block;font-size:11px;margin-bottom:0;margin-top:20px;text-align:center;}.formkit-form[data-uid="73b9d5c6cc"][min-width~="600"] [data-style="full"],.formkit-form[data-uid="73b9d5c6cc"][min-width~="700"] [data-style="full"],.formkit-form[data-uid="73b9d5c6cc"][min-width~="800"] [data-style="full"]{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));}.formkit-form[data-uid="73b9d5c6cc"][min-width~="600"] .formkit-column,.formkit-form[data-uid="73b9d5c6cc"][min-width~="700"] .formkit-column,.formkit-form[data-uid="73b9d5c6cc"][min-width~="800"] .formkit-column{padding:40px;} </style></form>
  `,
  }
}
export default function() {
  return (
    <div
      css={css`
        margin-bottom: 20px;
      `}
      dangerouslySetInnerHTML={createMarkup()}
    />
  )
}
