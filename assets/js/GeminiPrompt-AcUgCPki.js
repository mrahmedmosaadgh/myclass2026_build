import{o as e,u as t,d as n,C as s,c as o,f as a,Q as i,p as l,a as r,m as c}from"./app-Cs5CKgHw.js";import{Q as u}from"./QSpace-Xg69Ss6f.js";import{Q as d}from"./QBtnToggle-5HzBn6ma.js";import{Q as m}from"./QSelect-D-pA-eh-.js";import h from"./TextToSpeechButton-D41zUyDi.js";import{f,a as p,k as g,o as v,af as E,I as C,J as y,K as b,b as O,Q as _,O as w,W as I,N as T}from"./vendor-nQjeLEvd.js";import"./offline-BzIlwqNM.js";import"./i18n-kquWfmcz.js";import"./ui-Bfjdq-TR.js";import"./rtl-Cr6c3OOr.js";var A,N,R,S,x,q;(N=A||(A={})).STRING="string",N.NUMBER="number",N.INTEGER="integer",N.BOOLEAN="boolean",N.ARRAY="array",N.OBJECT="object",(S=R||(R={})).LANGUAGE_UNSPECIFIED="language_unspecified",S.PYTHON="python",(q=x||(x={})).OUTCOME_UNSPECIFIED="outcome_unspecified",q.OUTCOME_OK="outcome_ok",q.OUTCOME_FAILED="outcome_failed",q.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded";
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const M=["user","model","function","system"];var U,D,L,G,P,j,k,F,H,V,$,B,K,Y,Q,J;(D=U||(U={})).HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",D.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",D.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",D.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",D.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",D.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY",(G=L||(L={})).HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",G.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",G.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",G.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",G.BLOCK_NONE="BLOCK_NONE",(j=P||(P={})).HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",j.NEGLIGIBLE="NEGLIGIBLE",j.LOW="LOW",j.MEDIUM="MEDIUM",j.HIGH="HIGH",(F=k||(k={})).BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",F.SAFETY="SAFETY",F.OTHER="OTHER",(V=H||(H={})).FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",V.STOP="STOP",V.MAX_TOKENS="MAX_TOKENS",V.SAFETY="SAFETY",V.RECITATION="RECITATION",V.LANGUAGE="LANGUAGE",V.BLOCKLIST="BLOCKLIST",V.PROHIBITED_CONTENT="PROHIBITED_CONTENT",V.SPII="SPII",V.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",V.OTHER="OTHER",(B=$||($={})).TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",B.RETRIEVAL_QUERY="RETRIEVAL_QUERY",B.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",B.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",B.CLASSIFICATION="CLASSIFICATION",B.CLUSTERING="CLUSTERING",(Y=K||(K={})).MODE_UNSPECIFIED="MODE_UNSPECIFIED",Y.AUTO="AUTO",Y.ANY="ANY",Y.NONE="NONE",(J=Q||(Q={})).MODE_UNSPECIFIED="MODE_UNSPECIFIED",J.MODE_DYNAMIC="MODE_DYNAMIC";
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class W extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class X extends W{constructor(e,t){super(e),this.response=t}}class z extends W{constructor(e,t,n,s){super(e),this.status=t,this.statusText=n,this.errorDetails=s}}class Z extends W{}class ee extends W{}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te,ne;(ne=te||(te={})).GENERATE_CONTENT="generateContent",ne.STREAM_GENERATE_CONTENT="streamGenerateContent",ne.COUNT_TOKENS="countTokens",ne.EMBED_CONTENT="embedContent",ne.BATCH_EMBED_CONTENTS="batchEmbedContents";class se{constructor(e,t,n,s,o){this.model=e,this.task=t,this.apiKey=n,this.stream=s,this.requestOptions=o}toString(){var e,t;const n=(null===(e=this.requestOptions)||void 0===e?void 0:e.apiVersion)||"v1beta";let s=`${(null===(t=this.requestOptions)||void 0===t?void 0:t.baseUrl)||"https://generativelanguage.googleapis.com"}/${n}/${this.model}:${this.task}`;return this.stream&&(s+="?alt=sse"),s}}async function oe(e){var t;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",function(e){const t=[];return(null==e?void 0:e.apiClient)&&t.push(e.apiClient),t.push("genai-js/0.24.1"),t.join(" ")}(e.requestOptions)),n.append("x-goog-api-key",e.apiKey);let s=null===(t=e.requestOptions)||void 0===t?void 0:t.customHeaders;if(s){if(!(s instanceof Headers))try{s=new Headers(s)}catch(o){throw new Z(`unable to convert customHeaders value ${JSON.stringify(s)} to Headers: ${o.message}`)}for(const[e,t]of s.entries()){if("x-goog-api-key"===e)throw new Z(`Cannot set reserved header name ${e}`);if("x-goog-api-client"===e)throw new Z(`Header name ${e} can only be set using the apiClient field`);n.append(e,t)}}return n}async function ae(e,t,n,s,o,a={},i=fetch){const{url:l,fetchOptions:r}=await async function(e,t,n,s,o,a){const i=new se(e,t,n,s,a);return{url:i.toString(),fetchOptions:Object.assign(Object.assign({},ie(a)),{method:"POST",headers:await oe(i),body:o})}}(e,t,n,s,o,a);return async function(e,t,n=fetch){let s;try{s=await n(e,t)}catch(o){!function(e,t){let n=e;"AbortError"===n.name?(n=new ee(`Request aborted when fetching ${t.toString()}: ${e.message}`),n.stack=e.stack):e instanceof z||e instanceof Z||(n=new W(`Error fetching from ${t.toString()}: ${e.message}`),n.stack=e.stack);throw n}(o,e)}s.ok||await async function(e,t){let n,s="";try{const t=await e.json();s=t.error.message,t.error.details&&(s+=` ${JSON.stringify(t.error.details)}`,n=t.error.details)}catch(o){}throw new z(`Error fetching from ${t.toString()}: [${e.status} ${e.statusText}] ${s}`,e.status,e.statusText,n)}(s,e);return s}(l,r,i)}function ie(e){const t={};if(void 0!==(null==e?void 0:e.signal)||(null==e?void 0:e.timeout)>=0){const n=new AbortController;(null==e?void 0:e.timeout)>=0&&setTimeout(()=>n.abort(),e.timeout),(null==e?void 0:e.signal)&&e.signal.addEventListener("abort",()=>{n.abort()}),t.signal=n.signal}return t}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),ue(e.candidates[0]))throw new X(`${de(e)}`,e);return function(e){var t,n,s,o;const a=[];if(null===(n=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===n?void 0:n.parts)for(const i of null===(o=null===(s=e.candidates)||void 0===s?void 0:s[0].content)||void 0===o?void 0:o.parts)i.text&&a.push(i.text),i.executableCode&&a.push("\n```"+i.executableCode.language+"\n"+i.executableCode.code+"\n```\n"),i.codeExecutionResult&&a.push("\n```\n"+i.codeExecutionResult.output+"\n```\n");return a.length>0?a.join(""):""}(e)}if(e.promptFeedback)throw new X(`Text not available. ${de(e)}`,e);return""},e.functionCall=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),ue(e.candidates[0]))throw new X(`${de(e)}`,e);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),re(e)[0]}if(e.promptFeedback)throw new X(`Function call not available. ${de(e)}`,e)},e.functionCalls=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),ue(e.candidates[0]))throw new X(`${de(e)}`,e);return re(e)}if(e.promptFeedback)throw new X(`Function call not available. ${de(e)}`,e)},e}function re(e){var t,n,s,o;const a=[];if(null===(n=null===(t=e.candidates)||void 0===t?void 0:t[0].content)||void 0===n?void 0:n.parts)for(const i of null===(o=null===(s=e.candidates)||void 0===s?void 0:s[0].content)||void 0===o?void 0:o.parts)i.functionCall&&a.push(i.functionCall);return a.length>0?a:void 0}const ce=[H.RECITATION,H.SAFETY,H.LANGUAGE];function ue(e){return!!e.finishReason&&ce.includes(e.finishReason)}function de(e){var t,n,s;let o="";if(e.candidates&&0!==e.candidates.length||!e.promptFeedback){if(null===(s=e.candidates)||void 0===s?void 0:s[0]){const t=e.candidates[0];ue(t)&&(o+=`Candidate was blocked due to ${t.finishReason}`,t.finishMessage&&(o+=`: ${t.finishMessage}`))}}else o+="Response was blocked",(null===(t=e.promptFeedback)||void 0===t?void 0:t.blockReason)&&(o+=` due to ${e.promptFeedback.blockReason}`),(null===(n=e.promptFeedback)||void 0===n?void 0:n.blockReasonMessage)&&(o+=`: ${e.promptFeedback.blockReasonMessage}`);return o}function me(e){return this instanceof me?(this.v=e,this):new me(e)}function he(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var s,o=n.apply(e,t||[]),a=[];return s={},i("next"),i("throw"),i("return"),s[Symbol.asyncIterator]=function(){return this},s;function i(e){o[e]&&(s[e]=function(t){return new Promise(function(n,s){a.push([e,t,n,s])>1||l(e,t)})})}function l(e,t){try{(n=o[e](t)).value instanceof me?Promise.resolve(n.value.v).then(r,c):u(a[0][2],n)}catch(s){u(a[0][3],s)}var n}function r(e){l("next",e)}function c(e){l("throw",e)}function u(e,t){e(t),a.shift(),a.length&&l(a[0][0],a[0][1])}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fe=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function pe(e){const t=function(e){const t=e.getReader();return new ReadableStream({start(e){let n="";return s();function s(){return t.read().then(({value:t,done:o})=>{if(o)return n.trim()?void e.error(new W("Failed to parse stream")):void e.close();n+=t;let a,i=n.match(fe);for(;i;){try{a=JSON.parse(i[1])}catch(l){return void e.error(new W(`Error parsing JSON response: "${i[1]}"`))}e.enqueue(a),n=n.substring(i[0].length),i=n.match(fe)}return s()}).catch(e=>{let t=e;throw t.stack=e.stack,t="AbortError"===t.name?new ee("Request aborted when reading from the stream"):new W("Error reading from the stream"),t})}}})}(e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0}))),[n,s]=t.tee();return{stream:ve(n),response:ge(s)}}async function ge(e){const t=[],n=e.getReader();for(;;){const{done:e,value:s}=await n.read();if(e)return le(Ee(t));t.push(s)}}function ve(e){return he(this,arguments,function*(){const t=e.getReader();for(;;){const{value:e,done:n}=yield me(t.read());if(n)break;yield yield me(le(e))}})}function Ee(e){const t=e[e.length-1],n={promptFeedback:null==t?void 0:t.promptFeedback};for(const s of e){if(s.candidates){let e=0;for(const t of s.candidates)if(n.candidates||(n.candidates=[]),n.candidates[e]||(n.candidates[e]={index:e}),n.candidates[e].citationMetadata=t.citationMetadata,n.candidates[e].groundingMetadata=t.groundingMetadata,n.candidates[e].finishReason=t.finishReason,n.candidates[e].finishMessage=t.finishMessage,n.candidates[e].safetyRatings=t.safetyRatings,t.content&&t.content.parts){n.candidates[e].content||(n.candidates[e].content={role:t.content.role||"user",parts:[]});const s={};for(const o of t.content.parts)o.text&&(s.text=o.text),o.functionCall&&(s.functionCall=o.functionCall),o.executableCode&&(s.executableCode=o.executableCode),o.codeExecutionResult&&(s.codeExecutionResult=o.codeExecutionResult),0===Object.keys(s).length&&(s.text=""),n.candidates[e].content.parts.push(s)}e++}s.usageMetadata&&(n.usageMetadata=s.usageMetadata)}return n}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ce(e,t,n,s){return pe(await ae(t,te.STREAM_GENERATE_CONTENT,e,!0,JSON.stringify(n),s))}async function ye(e,t,n,s){const o=await ae(t,te.GENERATE_CONTENT,e,!1,JSON.stringify(n),s);return{response:le(await o.json())}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(e){if(null!=e)return"string"==typeof e?{role:"system",parts:[{text:e}]}:e.text?{role:"system",parts:[e]}:e.parts?e.role?e:{role:"system",parts:e.parts}:void 0}function Oe(e){let t=[];if("string"==typeof e)t=[{text:e}];else for(const n of e)"string"==typeof n?t.push({text:n}):t.push(n);return function(e){const t={role:"user",parts:[]},n={role:"function",parts:[]};let s=!1,o=!1;for(const a of e)"functionResponse"in a?(n.parts.push(a),o=!0):(t.parts.push(a),s=!0);if(s&&o)throw new W("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!s&&!o)throw new W("No content is provided for sending chat message.");if(s)return t;return n}(t)}function _e(e){let t;if(e.contents)t=e;else{t={contents:[Oe(e)]}}return e.systemInstruction&&(t.systemInstruction=be(e.systemInstruction)),t}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const we=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],Ie={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function Te(e){var t;if(void 0===e.candidates||0===e.candidates.length)return!1;const n=null===(t=e.candidates[0])||void 0===t?void 0:t.content;if(void 0===n)return!1;if(void 0===n.parts||0===n.parts.length)return!1;for(const s of n.parts){if(void 0===s||0===Object.keys(s).length)return!1;if(void 0!==s.text&&""===s.text)return!1}return!0}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae="SILENT_ERROR";class Ne{constructor(e,t,n,s={}){this.model=t,this.params=n,this._requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,(null==n?void 0:n.history)&&(!function(e){let t=!1;for(const n of e){const{role:e,parts:s}=n;if(!t&&"user"!==e)throw new W(`First content should be with role 'user', got ${e}`);if(!M.includes(e))throw new W(`Each item should include role field. Got ${e} but valid roles are: ${JSON.stringify(M)}`);if(!Array.isArray(s))throw new W("Content should have 'parts' property with an array of Parts");if(0===s.length)throw new W("Each Content should have at least one part");const o={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const t of s)for(const e of we)e in t&&(o[e]+=1);const a=Ie[e];for(const t of we)if(!a.includes(t)&&o[t]>0)throw new W(`Content with role '${e}' can't contain '${t}' part`);t=!0}}(n.history),this._history=n.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,t={}){var n,s,o,a,i,l;await this._sendPromise;const r=Oe(e),c={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(s=this.params)||void 0===s?void 0:s.generationConfig,tools:null===(o=this.params)||void 0===o?void 0:o.tools,toolConfig:null===(a=this.params)||void 0===a?void 0:a.toolConfig,systemInstruction:null===(i=this.params)||void 0===i?void 0:i.systemInstruction,cachedContent:null===(l=this.params)||void 0===l?void 0:l.cachedContent,contents:[...this._history,r]},u=Object.assign(Object.assign({},this._requestOptions),t);let d;return this._sendPromise=this._sendPromise.then(()=>ye(this._apiKey,this.model,c,u)).then(e=>{var t;if(Te(e.response)){this._history.push(r);const n=Object.assign({parts:[],role:"model"},null===(t=e.response.candidates)||void 0===t?void 0:t[0].content);this._history.push(n)}else{const t=de(e.response);t&&console.warn(`sendMessage() was unsuccessful. ${t}. Inspect response object for details.`)}d=e}).catch(e=>{throw this._sendPromise=Promise.resolve(),e}),await this._sendPromise,d}async sendMessageStream(e,t={}){var n,s,o,a,i,l;await this._sendPromise;const r=Oe(e),c={safetySettings:null===(n=this.params)||void 0===n?void 0:n.safetySettings,generationConfig:null===(s=this.params)||void 0===s?void 0:s.generationConfig,tools:null===(o=this.params)||void 0===o?void 0:o.tools,toolConfig:null===(a=this.params)||void 0===a?void 0:a.toolConfig,systemInstruction:null===(i=this.params)||void 0===i?void 0:i.systemInstruction,cachedContent:null===(l=this.params)||void 0===l?void 0:l.cachedContent,contents:[...this._history,r]},u=Object.assign(Object.assign({},this._requestOptions),t),d=Ce(this._apiKey,this.model,c,u);return this._sendPromise=this._sendPromise.then(()=>d).catch(e=>{throw new Error(Ae)}).then(e=>e.response).then(e=>{if(Te(e)){this._history.push(r);const t=Object.assign({},e.candidates[0].content);t.role||(t.role="model"),this._history.push(t)}else{const t=de(e);t&&console.warn(`sendMessageStream() was unsuccessful. ${t}. Inspect response object for details.`)}}).catch(e=>{e.message!==Ae&&console.error(e)}),d}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Re{constructor(e,t,n={}){this.apiKey=e,this._requestOptions=n,t.model.includes("/")?this.model=t.model:this.model=`models/${t.model}`,this.generationConfig=t.generationConfig||{},this.safetySettings=t.safetySettings||[],this.tools=t.tools,this.toolConfig=t.toolConfig,this.systemInstruction=be(t.systemInstruction),this.cachedContent=t.cachedContent}async generateContent(e,t={}){var n;const s=_e(e),o=Object.assign(Object.assign({},this._requestOptions),t);return ye(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},s),o)}async generateContentStream(e,t={}){var n;const s=_e(e),o=Object.assign(Object.assign({},this._requestOptions),t);return Ce(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(n=this.cachedContent)||void 0===n?void 0:n.name},s),o)}startChat(e){var t;return new Ne(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:null===(t=this.cachedContent)||void 0===t?void 0:t.name},e),this._requestOptions)}async countTokens(e,t={}){const n=function(e,t){var n;let s={model:null==t?void 0:t.model,generationConfig:null==t?void 0:t.generationConfig,safetySettings:null==t?void 0:t.safetySettings,tools:null==t?void 0:t.tools,toolConfig:null==t?void 0:t.toolConfig,systemInstruction:null==t?void 0:t.systemInstruction,cachedContent:null===(n=null==t?void 0:t.cachedContent)||void 0===n?void 0:n.name,contents:[]};const o=null!=e.generateContentRequest;if(e.contents){if(o)throw new Z("CountTokensRequest must have one of contents or generateContentRequest, not both.");s.contents=e.contents}else if(o)s=Object.assign(Object.assign({},s),e.generateContentRequest);else{const t=Oe(e);s.contents=[t]}return{generateContentRequest:s}}(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),s=Object.assign(Object.assign({},this._requestOptions),t);return async function(e,t,n,s){return(await ae(t,te.COUNT_TOKENS,e,!1,JSON.stringify(n),s)).json()}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.apiKey,this.model,n,s)}async embedContent(e,t={}){const n=function(e){if("string"==typeof e||Array.isArray(e))return{content:Oe(e)};return e}(e),s=Object.assign(Object.assign({},this._requestOptions),t);return async function(e,t,n,s){return(await ae(t,te.EMBED_CONTENT,e,!1,JSON.stringify(n),s)).json()}(this.apiKey,this.model,n,s)}async batchEmbedContents(e,t={}){const n=Object.assign(Object.assign({},this._requestOptions),t);return async function(e,t,n,s){const o=n.requests.map(e=>Object.assign(Object.assign({},e),{model:t}));return(await ae(t,te.BATCH_EMBED_CONTENTS,e,!1,JSON.stringify({requests:o}),s)).json()}(this.apiKey,this.model,e,n)}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.apiKey=e}getGenerativeModel(e,t){if(!e.model)throw new W("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new Re(this.apiKey,e,t)}getGenerativeModelFromCachedContent(e,t,n){if(!e.name)throw new Z("Cached content must contain a `name` field.");if(!e.model)throw new Z("Cached content must contain a `model` field.");const s=["model","systemInstruction"];for(const a of s)if((null==t?void 0:t[a])&&e[a]&&(null==t?void 0:t[a])!==e[a]){if("model"===a){if((t.model.startsWith("models/")?t.model.replace("models/",""):t.model)===(e.model.startsWith("models/")?e.model.replace("models/",""):e.model))continue}throw new Z(`Different value for "${a}" specified in modelParams (${t[a]}) and cachedContent (${e[a]})`)}const o=Object.assign(Object.assign({},t),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new Re(this.apiKey,o,n)}}const xe={class:"row items-center q-gutter-sm"},qe={class:"row q-gutter-md q-mb-md"},Me={key:0,class:"q-mb-md"},Ue={class:"text-subtitle2 q-mb-sm"},De={class:"row q-gutter-md q-mb-md"},Le={class:"row q-gutter-md q-mb-md"},Ge={key:1,class:"q-mb-md"},Pe={class:"text-subtitle2 q-mb-sm"},je={class:"row q-gutter-md q-mb-md"},ke={key:2,class:"q-mb-md"},Fe={class:"text-subtitle2 q-mb-sm"},He={class:"row q-gutter-sm"},Ve={class:"row items-center q-mb-sm"},$e={class:"text-subtitle2"},Be={class:"ai-result"},Ke={key:0,class:"row q-gutter-sm q-mt-md"},Ye={key:1,class:"row q-gutter-sm q-mt-md"},Qe=e({__name:"GeminiPrompt",props:{modelValue:String,extra:String,autoRun:Boolean,questionId:{type:[String,Number],default:null}},emits:["update:modelValue","update:extra","response","use-as-question","use-as-answer"],setup(e,{emit:A}){const N=e,R=A,S=t(),x=f("questions"),q=f(N.modelValue||""),M=f(N.extra||""),U=f(""),D=f(!1),L=f({type:"behavioral",difficulty:"intermediate",topic:"",count:3}),G=f({question:"",style:"professional",length:"detailed"}),P=p(()=>"questions"===x.value?L.value.topic.trim().length>0:"answers"===x.value?G.value.question.trim().length>0:q.value.trim().length>0),j=[{label:"Behavioral",value:"behavioral"},{label:"Technical",value:"technical"},{label:"Situational",value:"situational"},{label:"Knowledge-based",value:"knowledge"},{label:"Problem-solving",value:"problem-solving"}],k=[{label:"Beginner",value:"beginner"},{label:"Intermediate",value:"intermediate"},{label:"Advanced",value:"advanced"},{label:"Expert",value:"expert"}],F=[{label:"Professional",value:"professional"},{label:"Conversational",value:"conversational"},{label:"Technical",value:"technical"},{label:"Educational",value:"educational"},{label:"Creative",value:"creative"}],H=[{label:"Brief",value:"brief"},{label:"Detailed",value:"detailed"},{label:"Comprehensive",value:"comprehensive"}];g(()=>N.modelValue,e=>q.value=e),g(()=>N.extra,e=>M.value=e);const V=new Se(void 0),$=()=>{switch(x.value){case"questions":return"Generate Questions";case"answers":return"Generate Answer";default:return"Ask Gemini"}},B=async()=>{var e,t,n;const s=(()=>{let e="";if("questions"===x.value){const{type:t,difficulty:n,topic:s,count:o}=L.value;e=`Generate ${o} ${n} level ${t} interview questions about ${s}.`,M.value&&(e+=` Additional requirements: ${M.value}`),e+=" Format the response as a numbered list with clear, well-structured questions. Make them practical and relevant for job interviews."}else if("answers"===x.value){const{question:t,style:n,length:s}=G.value;e=`Provide a ${s} ${n} answer to this question: "${t}"`,M.value&&(e+=` Additional context: ${M.value}`),e+=" Make the answer well-structured, informative, and suitable for a job interview context."}else e=[q.value,M.value].filter(Boolean).join("\n\n");return e})();D.value=!0,U.value="";try{const a=V.getGenerativeModel({model:"gemini-1.5-flash"}),i=await a.generateContent(s);console.log("Full Gemini result:",i);let l="No response.";if(null==i?void 0:i.response){console.log("Response object:",i.response);try{l=i.response.text(),console.log("Text extracted via .text():",l)}catch(o){console.log("Error calling .text(), trying manual extraction:",o);const s=i.response.candidates;if(console.log("Candidates:",s),s&&s.length>0){const o=null==(t=null==(e=s[0])?void 0:e.content)?void 0:t.parts;console.log("Parts:",o),o&&o.length>0&&(l=(null==(n=o[0])?void 0:n.text)||"No response.",console.log("Text extracted manually:",l))}}}console.log("Final AI Response:",l),U.value=l,R("response",l),S.notify({type:"positive",message:"AI content generated successfully!",position:"top",icon:"auto_awesome"})}catch(a){console.error("Gemini Error:",a),console.error("Full error details:",a),S.notify({type:"negative",message:"Failed to get a response from Gemini. Check console for details."})}D.value=!1},K=()=>{navigator.clipboard.writeText(U.value).then(()=>{S.notify({type:"positive",message:"Content copied to clipboard!",position:"top"})})},Y=()=>{U.value=""},Q=()=>{R("use-as-question",U.value),S.notify({type:"info",message:"Question content ready to use",position:"top"})},J=()=>{R("use-as-answer",U.value),S.notify({type:"info",message:"Answer content ready to use",position:"top"})},W=()=>{S.notify({type:"info",message:"Edit functionality - copy the content and paste it in your form",position:"top"})};return g(x,()=>{U.value=""}),v(()=>{N.autoRun&&q.value&&B()}),(e,t)=>{const f=E("q-markdown");return y(),C(c,{class:"gemini-prompt-card"},{default:b(()=>[O(o,{class:"bg-gradient-ai text-white"},{default:b(()=>[w("div",xe,[O(n,{name:"auto_awesome",size:"md"}),t[17]||(t[17]=w("div",{class:"text-h6"},"AI Assistant",-1)),O(u),O(s,{icon:"psychology",color:"white","text-color":"primary",size:"sm"},{default:b(()=>t[16]||(t[16]=[I(" Powered by Gemini ")])),_:1})])]),_:1}),O(o,null,{default:b(()=>[w("div",qe,[O(d,{modelValue:x.value,"onUpdate:modelValue":t[0]||(t[0]=e=>x.value=e),"toggle-color":"primary",options:[{label:"Generate Questions",value:"questions",icon:"quiz"},{label:"Generate Answers",value:"answers",icon:"forum"},{label:"Custom Prompt",value:"custom",icon:"edit"}],class:"full-width"},null,8,["modelValue"])]),"questions"===x.value?(y(),T("div",Me,[w("div",Ue,[O(n,{name:"quiz",class:"q-mr-xs"}),t[18]||(t[18]=I(" Question Generation Settings "))]),w("div",De,[O(m,{modelValue:L.value.type,"onUpdate:modelValue":t[1]||(t[1]=e=>L.value.type=e),options:j,label:"Question Type",class:"col",outlined:"",dense:""},null,8,["modelValue"]),O(m,{modelValue:L.value.difficulty,"onUpdate:modelValue":t[2]||(t[2]=e=>L.value.difficulty=e),options:k,label:"Difficulty Level",class:"col",outlined:"",dense:""},null,8,["modelValue"])]),w("div",Le,[O(a,{modelValue:L.value.topic,"onUpdate:modelValue":t[3]||(t[3]=e=>L.value.topic=e),label:"Topic/Subject",placeholder:"e.g., JavaScript, Project Management, Leadership",class:"col",outlined:"",dense:""},null,8,["modelValue"]),O(a,{modelValue:L.value.count,"onUpdate:modelValue":t[4]||(t[4]=e=>L.value.count=e),label:"Number of Questions",type:"number",min:"1",max:"10",class:"col-3",outlined:"",dense:""},null,8,["modelValue"])]),O(a,{modelValue:M.value,"onUpdate:modelValue":[t[5]||(t[5]=e=>M.value=e),t[6]||(t[6]=e=>R("update:extra",e))],label:"Additional Instructions (Optional)",placeholder:"e.g., Focus on practical scenarios, Include code examples",type:"textarea",rows:"2",outlined:"",class:"q-mb-md"},null,8,["modelValue"])])):_("",!0),"answers"===x.value?(y(),T("div",Ge,[w("div",Pe,[O(n,{name:"forum",class:"q-mr-xs"}),t[19]||(t[19]=I(" Answer Generation Settings "))]),O(a,{modelValue:G.value.question,"onUpdate:modelValue":t[7]||(t[7]=e=>G.value.question=e),label:"Question to Answer",placeholder:"Enter the question you want to generate an answer for",type:"textarea",rows:"2",outlined:"",class:"q-mb-md",rules:[e=>!!e||"Question is required for answer generation"]},null,8,["modelValue","rules"]),w("div",je,[O(m,{modelValue:G.value.style,"onUpdate:modelValue":t[8]||(t[8]=e=>G.value.style=e),options:F,label:"Answer Style",class:"col",outlined:"",dense:""},null,8,["modelValue"]),O(m,{modelValue:G.value.length,"onUpdate:modelValue":t[9]||(t[9]=e=>G.value.length=e),options:H,label:"Answer Length",class:"col",outlined:"",dense:""},null,8,["modelValue"])]),O(a,{modelValue:M.value,"onUpdate:modelValue":[t[10]||(t[10]=e=>M.value=e),t[11]||(t[11]=e=>R("update:extra",e))],label:"Additional Context (Optional)",placeholder:"e.g., Target audience, specific requirements, examples to include",type:"textarea",rows:"2",outlined:"",class:"q-mb-md"},null,8,["modelValue"])])):_("",!0),"custom"===x.value?(y(),T("div",ke,[w("div",Fe,[O(n,{name:"edit",class:"q-mr-xs"}),t[20]||(t[20]=I(" Custom Prompt "))]),O(a,{modelValue:q.value,"onUpdate:modelValue":[t[12]||(t[12]=e=>q.value=e),t[13]||(t[13]=e=>R("update:modelValue",e))],label:"Your Prompt",outlined:"",dense:"",autogrow:"",rules:[e=>!!e||"Prompt is required"],class:"q-mb-sm"},null,8,["modelValue","rules"]),O(a,{modelValue:M.value,"onUpdate:modelValue":[t[14]||(t[14]=e=>M.value=e),t[15]||(t[15]=e=>R("update:extra",e))],label:"Extra instructions (optional)",outlined:"",dense:"",autogrow:"",class:"q-mb-md"},null,8,["modelValue"])])):_("",!0),w("div",He,[O(i,{loading:D.value,disable:!P.value,color:"primary",icon:"auto_awesome",label:$(),onClick:B,class:"col"},null,8,["loading","disable","label"]),U.value?(y(),C(i,{key:0,icon:"content_copy",flat:"",color:"primary",onClick:K},{default:b(()=>[O(l,null,{default:b(()=>t[21]||(t[21]=[I("Copy Result")])),_:1})]),_:1})):_("",!0),U.value?(y(),C(i,{key:1,icon:"clear",flat:"",color:"negative",onClick:Y},{default:b(()=>[O(l,null,{default:b(()=>t[22]||(t[22]=[I("Clear Result")])),_:1})]),_:1})):_("",!0)])]),_:1}),U.value?(y(),C(o,{key:0,class:"bg-grey-1"},{default:b(()=>[w("div",Ve,[w("div",$e,[O(n,{name:"auto_awesome",class:"q-mr-xs"}),t[23]||(t[23]=I(" AI Generated Content "))]),O(u),O(h,{text:U.value,size:"sm",round:"",flat:""},null,8,["text"])]),O(r,{class:"q-mb-md"}),w("div",Be,[O(f,{src:U.value},null,8,["src"])]),"questions"===x.value?(y(),T("div",Ke,[O(i,{icon:"add",label:"Use as New Question",color:"positive",flat:"",onClick:Q}),O(i,{icon:"edit",label:"Edit & Use",color:"primary",flat:"",onClick:W})])):_("",!0),"answers"===x.value?(y(),T("div",Ye,[O(i,{icon:"add",label:"Use as Answer",color:"positive",flat:"",onClick:J}),O(i,{icon:"edit",label:"Edit & Use",color:"primary",flat:"",onClick:W})])):_("",!0)]),_:1})):_("",!0)]),_:1})}}},[["__scopeId","data-v-f5e650d1"]]);export{Qe as default};
