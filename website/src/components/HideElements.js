import React from "react";
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export default function Message(props) {
    hideFooter();
    hideTopBar();
    hideEditPage();
    hideIntercomApp();

    return true;
}

function hideFooter() {
    if (ExecutionEnvironment.canUseDOM){
        Array.prototype.forEach.call(document.getElementsByClassName('footer'), function(element) {
            element.style.display = 'none';
        })
    }
}


function hideTopBar() {
    if (ExecutionEnvironment.canUseDOM){
        Array.prototype.forEach.call(document.getElementsByClassName('navbar--fixed-top'), function(element) {
            element.style.display = 'none';
        })
    }
        
}

function hideEditPage() {
    if (ExecutionEnvironment.canUseDOM){
        Array.prototype.forEach.call(document.getElementsByClassName('theme-doc-footer-edit-meta-row row'), function(element) {
             element.style.display = 'none';
         })
    }
        
}

function hideIntercomApp() {
  if (typeof Intercom === "function") {
    Intercom('update', {
      "hide_default_launcher": true
    });
  }  
}