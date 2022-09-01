"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3285],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=d(n),m=o,p=h["".concat(c,".").concat(m)]||h[m]||u[m]||i;return n?a.createElement(p,r(r({ref:t},l),{},{components:n})):a.createElement(p,r({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2481:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const i={sidebar_position:1},r="Modeling Data",s={unversionedId:"cookbook/modeling-data",id:"cookbook/modeling-data",isDocsHomePage:!1,title:"Modeling Data",description:"All data in Automerge must be stored in a document. A document can be modeled in a variety of ways, and there are many design patterns that can be used. An application could have many documents, typically identified by a UUID.",source:"@site/docs/cookbook/modeling-data.md",sourceDirName:"cookbook",slug:"/cookbook/modeling-data",permalink:"/docs/cookbook/modeling-data",editUrl:"https://github.com/automerge/automerge.github.io/edit/main/docs/cookbook/modeling-data.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Table",permalink:"/docs/types/table"},next:{title:"Real-time Collaboration",permalink:"/docs/cookbook/real-time"}},c=[{value:"How many documents?",id:"how-many-documents",children:[],level:2},{value:"TypeScript support",id:"typescript-support",children:[],level:2},{value:"Setting up an initial document structure",id:"setting-up-an-initial-document-structure",children:[],level:2},{value:"Versioning",id:"versioning",children:[],level:2},{value:"Performance",id:"performance",children:[],level:2}],d={toc:c};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"modeling-data"},"Modeling Data"),(0,o.kt)("p",null,"All data in Automerge must be stored in a document. A document can be modeled in a variety of ways, and there are many design patterns that can be used. An application could have many documents, typically identified by a UUID. "),(0,o.kt)("p",null,"In this section, we will discuss how to model data within a particular document, including how to version and manage data with Automerge in production scenarios."),(0,o.kt)("h2",{id:"how-many-documents"},"How many documents?"),(0,o.kt)("p",null,"You can decide which things to group together as one Automerge document (more fine grained or more coarse grained) based on what makes sense in your app. Having hundreds of docs should be fine \u2014 we've built prototypes of that scale. One major automerge project, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/automerge/pushpin"},"PushPin"),", was built around very granular documents. This had a lot of benefits, but the overhead of syncing many thousands of documents was high. One of the first challenges in synchronizing large numbers of documents is that nodes are likely to have overlapping but disjoint documents and neither side wants to disclose things the other doesn't know about (at least in our last system, knowing the ID of a document was evidence a client should have access to it.)  "),(0,o.kt)("p",null,"We believe on the whole there's an art to the granularity of data that is universal. When should you have two JSON documents or two SQLite databases or two rows? We suspect that an Automerge document is best suited to being a unit of collaboration between two people or a small group. "),(0,o.kt)("h2",{id:"typescript-support"},"TypeScript support"),(0,o.kt)("p",null,"Given that you have a document, how can you create safety rails for its data integrity? In a typical SQL database, a table would have its own schema, and you create migrations from one schema version to the next. Automerge is flexible on the schema, and will let you add and remove properties and values at will. To improve the programming experience, a document can be typed to have its own schema using TypeScript."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"type D = { \n  count: Automerge.Counter,\n  text: Automerge.Text,\n  cards: [] \n}\nlet doc = Automerge.change<D>(Automerge.init(), (doc: D) => {\n  doc.count = new Automerge.Counter()\n  doc.text = new Automerge.Text()\n  doc.cards = []\n})\n")),(0,o.kt)("h2",{id:"setting-up-an-initial-document-structure"},"Setting up an initial document structure"),(0,o.kt)("p",null,"When you create a document using ",(0,o.kt)("inlineCode",{parentName:"p"},"Automerge.init()"),", it's just an empty JSON document with no properties. As the first change, most applications will need to initialize some empty collection objects that are expected to be present within the document."),(0,o.kt)("p",null,"The easiest way of doing this is with a call to ",(0,o.kt)("inlineCode",{parentName:"p"},"Automerge.change()")," that sets up the document schema in the form that you need it, like in the code sample above. You can then ",(0,o.kt)("a",{parentName:"p",href:"/docs/cookbook/real-time/"},"sync")," this initial change to all of your devices; once everybody has the schema, you can have different users updating the document on different devices, and the updates should merge nicely. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Set up the `cards` array in doc1\nlet doc1 = Automerge.change(Automerge.init(), doc => {\n  doc.cards = []\n})\n\n// In doc2, don't create `cards` again! Instead, merge\n// the schema initialization from doc1\nlet doc2 = Automerge.merge(Automerge.init(), doc1)\n\n// Now we can update both documents\ndoc1 = Automerge.change(doc1, doc => {\n  doc.cards.push({ title: 'card1' })\n})\n\ndoc2 = Automerge.change(doc2, doc => {\n  doc.cards.push({ title: 'card2' })\n})\n\n// The merged document will contain both cards\ndoc1 = Automerge.merge(doc1, doc2)\ndoc2 = Automerge.merge(doc2, doc1)\n")),(0,o.kt)("p",null,"However, sometimes it's inconvenient to have to sync the initial change to a device before you can modify the document on that device. If you want two devices to be able to independently set up their own document schema, but still to be able to merge those documents, you have to be careful. Simply doing ",(0,o.kt)("inlineCode",{parentName:"p"},"Automerge.change()")," on each device to initialize the schema ",(0,o.kt)("strong",{parentName:"p"},"will not work"),", because you now have two different documents with no shared ancestry (even if the initial change performs the same operations, each device has a different actorId and so the changes will be different)."),(0,o.kt)("p",null,"If you really must initialize each device's copy of a document independently, there are some hacks you can use. One option is to do the initial ",(0,o.kt)("inlineCode",{parentName:"p"},"Automerge.change()")," once to set up your schema, then call ",(0,o.kt)("inlineCode",{parentName:"p"},"Automerge.getLastLocalChange()")," on the document (which returns a byte array), and ",(0,o.kt)("em",{parentName:"p"},"hard-code that byte array into your application"),". Now, on each device that needs to initialize a document, you do this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// hard-code the initial change here\nconst initChange = new Uint8Array([133, 111, 74, 131, ...])\nlet [doc] = Automerge.applyChanges(Automerge.init(), [initChange])\n")),(0,o.kt)("p",null,"This will set you up with a document whose initial change is the one you hard-coded. Any documents you set up with the same initial change will be able to merge."),(0,o.kt)("p",null,"There is an alternative hack you can use, if you know what you are doing (be careful, this can easily go wrong). Instead of hard-coding a byte array, you can create a change with a hard-coded actorId and a hard-coded timestamp. If two devices perform exactly identical operations with the same actorId and the same timestamp, they will generate changes that are byte-for-byte identical, and which therefore will have the same hash. This way, you can also set up documents with the same initial change."),(0,o.kt)("p",null,"To hard-code the actorId and timestamp, you can use the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let schema = Automerge.change(Automerge.init({actorId: '0000'}), {time: 0}, doc => {\n  doc.count = new Automerge.Counter()\n  doc.text = new Automerge.Text()\n  doc.cards = []\n})\nlet initChange = Automerge.getLastLocalChange(schema)\n")),(0,o.kt)("p",null,"Now ",(0,o.kt)("inlineCode",{parentName:"p"},"initChange")," is a byte array as before. You cannot use the document ",(0,o.kt)("inlineCode",{parentName:"p"},"schema")," for any further changes, because it has a fixed actorId, and it's an error to have multiple users with the same actorId. Instead, you can now make a new document with ",(0,o.kt)("inlineCode",{parentName:"p"},"Automerge.init()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"initChange")," as before:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"let [doc] = Automerge.applyChanges(Automerge.init(), [initChange])\n")),(0,o.kt)("p",null,"Now, ",(0,o.kt)("inlineCode",{parentName:"p"},"doc")," is initialized and ready to be used as any other Automerge document. You can save that document to disk as you would normally with ",(0,o.kt)("inlineCode",{parentName:"p"},"Automerge.save(doc)")," and load it later when your app starts."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"NOTE: You only have to create this initial change the first time the document loads. You can check if you have a local document already before making this initial document.")),(0,o.kt)("h2",{id:"versioning"},"Versioning"),(0,o.kt)("p",null,"Often, there comes a time in the production lifecycle where you will need to change the schema of a document. Because Automerge uses a JSON document model, it's similar to a NoSQL database, where properties can be arbitrarily removed and added at will. "),(0,o.kt)("p",null,"You can implement your own versioning scheme, for example by embedding a schema version number into the document, and writing a function that can upgrade a document from one schema version to the next. However, doing this in a CRDT like Automerge is more difficult than migrations in a centralized relational database, because it could happen that two users independently perform the same migration. In this case, you need to ensure that the two migrations don't clash with each other, which is difficult."),(0,o.kt)("p",null,"One way of making migrations safe is by using the tricks from the previous section: in addition to hard-coding the initial change that sets up the document, you can also hard-code migrations that upgrade from one schema version to the next, using the same technique (either hard-coding the change as a byte array, or making a change on the fly with hard-coded actorId and timestamp). Do not modify the initial change; instead, every migration should be a separate hard-coded change that depends only on the preceding change. This way, you can have multiple devices independently applying the same migration, and they will all be compatible because the migration is performed identically on every device."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"type DocV1 = { \n  version: 1,\n  cards: Card[]\n}\n\ntype DocV2 = { \n  version: 2,\n  title: Automerge.Text,\n  cards: Card[]\n}\n\n// This change creates the `title` property requried in V2,\n// and updates the `version` property from 1 to 2\nconst migrateV1toV2 = new Uint8Array([133, 111, 74, 131, ...])\n\nlet doc = getDocumentFromNetwork()\nif (doc.version === 1) {\n  [doc] = Automerge.applyChange(doc, [migrateV1toV2])\n}\n")),(0,o.kt)("p",null,"Also keep in mind that in your app there might be some users using an old version of the app while other users are using a newer version; you will need to take care with migrations to ensure that they do not break compatibility with older app versions, or force all users to update to the latest version."),(0,o.kt)("p",null,"Some further ideas on safe schema migrations in CRDT apps are discussed in the ",(0,o.kt)("a",{parentName:"p",href:"https://www.inkandswitch.com/cambria"},"Cambria")," paper, but these are not yet implemented in Automerge. If you want to work on improving schema migrations in Automerge, please get in touch \u2014\xa0contributions are welcome!"),(0,o.kt)("h2",{id:"performance"},"Performance"),(0,o.kt)("p",null,"Automerge documents hold their entire change histories. It is fairly performant, and can handle a significant amount of data in a single document's history.  Performance depends very much on your workload, so we strongly suggest you do your own measurements with the type and quantity of data that you will have in your app. "),(0,o.kt)("p",null,"Some developers have proposed \u201cgarbage collecting\u201d large documents. If a document gets to a certain size, a central authority could emit a message to each peer that it would like to reduce it in size and only save the history from a specific change (hash). Martin Kleppmann did some experiments with a benchmark document to see how much space would be saved by discarding history, with and without preserving tombstones. See ",(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/x7drE24geUw?t=3289"},"this video at 55 minutes in"),". The savings are not all that great, which is why we haven't prioritised history truncation so far. "),(0,o.kt)("p",null,"Typically, performance improvements can come at the networking level. You can set up a single connection (between peers or client-server) and sync many docs over a single connection. The basic idea is to tag each message with the ID of the document it belongs to. There are possible ways of optimising this if necessary. In general, having fewer documents that a client must load over the network or into memory at any given time will reduce the synchronization and startup time for your application."))}l.isMDXComponent=!0}}]);