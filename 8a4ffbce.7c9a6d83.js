(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{173:function(e,t,l){"use strict";l.r(t),l.d(t,"frontMatter",(function(){return c})),l.d(t,"metadata",(function(){return r})),l.d(t,"rightToc",(function(){return i})),l.d(t,"default",(function(){return u}));var n=l(1),b=l(9),a=(l(0),l(208)),c={id:"filters",title:"Filters"},r={id:"modules/mechanics/filters",title:"Filters",description:"Filters are true/false conditions about players, blocks, or the match in general.",source:"@site/docs/modules/mechanics/filters.mdx",permalink:"/docs/modules/mechanics/filters",editUrl:"https://github.com/PGMDev/Website/docs/modules/mechanics/filters.mdx",sidebar:"Modules",previous:{title:"Other Gamemodes",permalink:"/docs/modules/objectives/other"},next:{title:"Regions",permalink:"/docs/modules/mechanics/regions"}},i=[{value:"Abstaining",id:"abstaining",children:[]},{value:"Defining Filters",id:"defining-filters",children:[]},{value:"Matcher Elements",id:"matcher-elements",children:[]},{value:"Modifier Elements",id:"modifier-elements",children:[]}],s={rightToc:i};function u(e){var t,l=e.components,c=Object(b.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,c,{components:l,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Filters are true/false conditions about players, blocks, or the match in general.\nOther modules use filters to decide ",Object(a.b)("em",{parentName:"p"},"if")," and ",Object(a.b)("em",{parentName:"p"},"when")," things should happen to those players, blocks, or the entire match."),Object(a.b)("p",null,"Filters are built from ",Object(a.b)("strong",{parentName:"p"},"matchers")," and ",Object(a.b)("strong",{parentName:"p"},"modifiers"),".\nMatchers are specific questions, like"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"is it made of wood?"),Object(a.b)("li",{parentName:"ul"},"is he/she on the Red Team?"),Object(a.b)("li",{parentName:"ul"},"is it inside region X?"),Object(a.b)("li",{parentName:"ul"},"has the match run past 5 minutes?")),Object(a.b)("p",null,"Modifiers can combine questions using logic, such as"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"A and B"),Object(a.b)("li",{parentName:"ul"},"A or B"),Object(a.b)("li",{parentName:"ul"},"not A"),Object(a.b)("li",{parentName:"ul"},"(A or B) and not (A and B)")),Object(a.b)("p",null,"Modifiers can also transform the meaning of questions, or answers, in various ways."),Object(a.b)("p",null,"The documentation for other modules will explain where filters can be used, and how the filter affects the module's behavior.\nGenerally, other modules use filters in one of two ways:"),Object(a.b)("ul",null,Object(a.b)("li",null,Object(a.b)("em",null,"Passively,")," which means whenever the module wants to do its thing, it will check the filter to decide if it should be done or not."),Object(a.b)("li",null,Object(a.b)("em",null,"Dynamically,")," in which case the filter will notify the module when it's time to do something, and who or what it should be done to.")),Object(a.b)("p",null,"Only filters labeled ",Object(a.b)("span",{className:"badge badge--primary"},"Dynamic")," are capable of the latter. Modules that require dynamic filters will say so in their documentation."),Object(a.b)("h3",{id:"abstaining"},"Abstaining"),Object(a.b)("p",null,"Some filters don't make sense in certain contexts.\nFor example, you can't ask if a block is on the Red Team, or if a player is made of wood, or if the match is inside a region."),Object(a.b)("p",null,"Some modules will generate an error if you try to use the wrong type of filter, but other modules may allow it.\nWhen a filter doesn't apply to a particular decision, it will ",Object(a.b)("strong",{parentName:"p"},"abstain")," from that decision, and things will behave as they would if the filter didn't exist.\nGenerally, you should avoid using filters in such a way that they can abstain, since it tends to be confusing."),Object(a.b)("p",null,"However, the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/modules/mechanics/regions#applying"}),"event rules module")," uses filter abstention to make very complex conditions easier to express:\nIt accepts a ",Object(a.b)("em",{parentName:"p"},"chain")," of filters, and uses the first filter in the chain that doesn't abstain."),Object(a.b)("p",null,"Filters can be ",Object(a.b)("em",{parentName:"p"},"forced")," to abstain using the ",Object(a.b)("inlineCode",{parentName:"p"},"<allow>")," and ",Object(a.b)("inlineCode",{parentName:"p"},"<deny>")," modifiers."),Object(a.b)("h3",{id:"defining-filters"},"Defining Filters"),Object(a.b)("p",null,"Filters can be defined inside the top-level ",Object(a.b)("inlineCode",{parentName:"p"},"<filters>")," element,\nand assigned an ",Object(a.b)("inlineCode",{parentName:"p"},"id")," used to reference them elsewhere."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'<filters>\n    <any id="filter-name">\n        \x3c!-- Filter elements --\x3e\n    </any>\n\n    <team id="viridescent-team-filter">viridescent-team</team>\n\n    \x3c!-- More filters--\x3e\n</filters>\n')),Object(a.b)("h3",{id:"matcher-elements"},"Matcher Elements"),Object(a.b)("p",null,"Filter matchers test for specific conditions or properties of things."),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",((t={style:"min-width: 300px;"}).style={minWidth:"300px"},t),"Element"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("th",{colspan:"3"},"Generic filters (apply to anything)")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,'<filter id="filter1"/>')),Object(a.b)("td",null,"Reference a filter by its ID."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Dynamic"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<always/>")),Object(a.b)("td",null,"Matches/allows everything.",Object(a.b)("br",null),"Can be referenced with the ID ",Object(a.b)("label",null,"always")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Dynamic"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<never/>")),Object(a.b)("td",null,"Matches nothing/denies everything.",Object(a.b)("br",null),"Can be referenced with the ID ",Object(a.b)("label",null,"never")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Dynamic"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<time>duration</time>")),Object(a.b)("td",null,"Filter if the specified"," ",Object(a.b)("a",{href:"/docs/reference/misc/time-periods"},"time period")," has elapsed since the match started."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Dynamic"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<flag-carried>flag_id</flag-carried>")),Object(a.b)("td",null,"Match if the flag is being carried by anyone."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Dynamic"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<flag-dropped>flag_id</flag-dropped>")),Object(a.b)("td",null,"Match if the flag is dropped on the ground."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Dynamic"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<flag-returned>flag_id</flag-returned>")),Object(a.b)("td",null,"Match if the flag is at the return-point."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Dynamic"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<flag-captured>flag_id</flag-captured>")),Object(a.b)("td",null,"Match if the flag has been captured."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Dynamic"))),Object(a.b)("tr",null,Object(a.b)("th",{colspan:"3"},"Spatial filters (apply to anything with a physical location)")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<void/>")),Object(a.b)("td",null,"Match if there is an air block at Y=0 in the vertical column of this location"),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",{colspan:"3"},Object(a.b)("em",null,"Any ",Object(a.b)("a",{href:"/docs/modules/mechanics/regions"},"region")," element"))),Object(a.b)("tr",null,Object(a.b)("th",{colspan:"3"},"Block filters")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<material>block</material>")),Object(a.b)("td",null,"Matches blocks by their"," ",Object(a.b)("a",{href:"/docs/reference/items/inventory#material_finder"},"Material")," ","name.",Object(a.b)("br",null),"Accepts a"," ",Object(a.b)("a",{href:"/docs/reference/items/inventory#material_matchers"},"Single Material Pattern")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<structural-load>2</structural-load>")),Object(a.b)("td",null,"Test the number of other gravity blocks that the queried block is supporting."),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("th",{colspan:"3"},"Entity filters")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<spawn>spawn reason</spawn>")),Object(a.b)("td",null,"Matches spawn event reasons, see"," ",Object(a.b)("a",{href:"/docs/modules/environment/mobs"},"mob spawning")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<mob>mob name</mob>")),Object(a.b)("td",null,"Matches mobs by their name, see"," ",Object(a.b)("a",{href:"/docs/modules/environment/mobs"},"mob spawning")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<entity>entity name</entity>")),Object(a.b)("td",null,"Match entities, e.g. projectiles, boats, dropped items, etc."),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("th",{colspan:"3"},"Competitor filters (apply to teams, or FFA players)")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<carrying-flag>flag_id</carrying-flag>")),Object(a.b)("td",null,"Match the team/player carrying the specified flag."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Dynamic"))),Object(a.b)("tr",null,Object(a.b)("th",{colspan:"3"},"Player filters")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<participating/>")),Object(a.b)("td",null,"Match if the player is participating in the match."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Dynamic"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<team>team</team>")),Object(a.b)("td",null,"Matches a team by its ID."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Dynamic"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<class>class name</class>")),Object(a.b)("td",null,"Match players with the specified class."),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<kill-streak/>")),Object(a.b)("td",null,"Match players with a certain range or amount of kills."),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<crouching/>")),Object(a.b)("td",null,"Match if the player is crouching."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Dynamic"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<walking/>")),Object(a.b)("td",null,"Match if the player is walking."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Dynamic"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<sprinting/>")),Object(a.b)("td",null,"Match if the player is sprinting."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Dynamic"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<flying/>")),Object(a.b)("td",null,"Match if the player is flying."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Dynamic"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<can-fly/>")),Object(a.b)("td",null,"Match if the player can fly."),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<gliding/>")),Object(a.b)("td",null,"Match if the player is gliding with an elytra."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Dynamic"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,'<carrying><item material=""/></carrying>')),Object(a.b)("td",null,"Match if the player is carrying an item."),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,'<holding><item material=""/></holding>')),Object(a.b)("td",null,"Match if the player is holding an item."),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,'<wearing><item material=""/></wearing>')),Object(a.b)("td",null,"Match if the player is wearing an item."),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("th",{colspan:"3"},"Event filters (apply to transient events)")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<cause>cause</cause>")),Object(a.b)("td",null,"Filter an event's cause."),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<random>decimal or range</random>")),Object(a.b)("td",null,"Random chance matcher."),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("th",{colspan:"3"},"Damage filters (apply to damage/combat events)")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<relation>relation</relation>")),Object(a.b)("td",null,"Filter an event's relation to the player."),Object(a.b)("td",null))))),Object(a.b)("h3",{id:"modifier-elements"},"Modifier Elements"),Object(a.b)("p",null,"Filter modifiers are used to alter the meaning of other filters, and combine them into more complex conditions.\nThese elements must contain either a single filter, or a list of filters, as their child elements."),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",{style:{minWidth:"85px"}},"Name"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("th",{colspan:"3"},"Logic - combine other filters")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<not>")),Object(a.b)("td",null,"Invert the filters result; allow if the child filter denies, deny if it allows, abstain otherwise."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Dynamic"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<one>")),Object(a.b)("td",null,"Allow if ",Object(a.b)("i",null,"only one")," of the child filters allows, deny if"," ",Object(a.b)("i",null,"one or more allow")," or ",Object(a.b)("i",null,"none allow and at least one denies"),", otherwise abstain."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Dynamic"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<all>")),Object(a.b)("td",null,"Allow if ",Object(a.b)("i",null,"all")," of the child filters allow, deny if"," ",Object(a.b)("i",null,"one or more deny"),", otherwise abstain."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Dynamic"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<any>")),Object(a.b)("td",null,"Allow if ",Object(a.b)("i",null,"one")," of the child filters allows, deny if"," ",Object(a.b)("i",null,"none allow and at least one denies"),", otherwise abstain."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Dynamic"))),Object(a.b)("tr",null,Object(a.b)("th",{colspan:"3"},"Abstention - force filters to abstain")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<allow>")),Object(a.b)("td",null,"Allow if the child filter allows, otherwise abstain (transform deny to abstain)."),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<deny>")),Object(a.b)("td",null,"Deny if the child filter allows, otherwise abstain."),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("th",{colspan:"3"},"Query modifiers - change the question")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<same-team>")),Object(a.b)("td",null,"Change a player question to a team question.",Object(a.b)("br",null),'For example, "do they have the flag?" becomes "does their team have the flag?".'),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<victim>")),Object(a.b)("td",null,"Make a damage question specifically about the victim.",Object(a.b)("br",null),'For example, "do they have the flag?" becomes "does the victim have the flag?" Commonly used with the'," ",Object(a.b)("a",{href:"/docs/modules/mechanics/damage"},"damage")," module."),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<attacker>")),Object(a.b)("td",null,"Make a damage question specifically about the attacker.",Object(a.b)("br",null),'For example, "do they have the flag?" becomes "does the attacker have the flag?" Commonly used in the'," ",Object(a.b)("a",{href:"/docs/modules/mechanics/damage"},"damage")," module."),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("th",{colspan:"3"},"Mechanisms - apply complex mechanics to other filters"))))),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Examples")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'<filters>\n    <not id="deny-yellow-explosions">\n        <all>\n            <team>yellow</team>\n            <cause>explosion</cause>\n        </all>\n    </not>\n</filters>\n')),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'<filters>\n    <deny id="no-tnt"><material>TNT</material></deny>\n</filters>\n')),Object(a.b)("h4",{id:"kill-streak-filter"},"Kill-Streak Filter"),Object(a.b)("p",null,"The kill-streak filter is a matcher that matches players who have a specified number of kills.\nThe kill counter can be set to count from the start of the match or from the last time the player died.\nThis filter is commonly used in ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/modules/gear/kill-rewards"}),"kill rewards")," but can also be used to restrict access to certain locations, etc."),Object(a.b)("h5",{id:"kill-streak-filter-attributes"},"Kill-Streak Filter Attributes"),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Attribute"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value"),Object(a.b)("th",null,"Default"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"min")),Object(a.b)("td",null,"Match players with at-least this many kills."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Number")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"max")),Object(a.b)("td",null,"Match players with a maximum of this many kills."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Number")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"count")),Object(a.b)("td",null,"Match players with exactly this many kills.",Object(a.b)("br",null),Object(a.b)("i",null,"Can not be mixed with the ",Object(a.b)("label",null,"min")," & ",Object(a.b)("label",null,"max")," ","attributes.")),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Number")),Object(a.b)("td",null)),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"repeat")),Object(a.b)("td",null,"Repeat the filter range"),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"true/false")),Object(a.b)("td",null,"false")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"persistent")),Object(a.b)("td",null,"Do not reset a players kill count when they die."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"true/false")),Object(a.b)("td",null,"false"))))),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Examples")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'<kill-streak min="3"/>      \x3c!-- matches players with at least 3 kills --\x3e\n<kill-streak max="5"/>      \x3c!-- matches players with at most 5 kills --\x3e\n<kill-streak count="4"/>    \x3c!-- matches players with exactly 4 kills --\x3e\n<kill-streak id="10th-kill-filter" repeat="true" count="10"/>    \x3c!-- match for every 10th kill --\x3e\n')),Object(a.b)("h4",{id:"random-filter"},"Random Filter"),Object(a.b)("p",null,"This filter will randomly ",Object(a.b)("inlineCode",{parentName:"p"},"ALLOW")," or ",Object(a.b)("inlineCode",{parentName:"p"},"DENY")," when evaluated in the context of an event.\nIts value is a decimal fraction between 0 and 1, representing the probability of ",Object(a.b)("inlineCode",{parentName:"p"},"ALLOW"),".\nThe value can also be an interval, in the form ",Object(a.b)("inlineCode",{parentName:"p"},"[0, 1)"),".\nWhen the filter is evaluated, a random number is chosen, and the filter passes if the number falls within the filter's interval.\nMultiple filters applied to the same object at the same instant will use the same random number.\nSo, if their intervals do not overlap, the filters will never both pass at the same time.\nUsing intervals in this way, any number of filters can be made mutually exclusive, or their relationships can be controlled in more complex ways.\nA random filter can only be applied to instantaneous events, and not to conditions that persist over some span of time.\nSpecifically, they can be used in the following contexts:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Regional block change rules"),Object(a.b)("li",{parentName:"ul"},"Block drop rules"),Object(a.b)("li",{parentName:"ul"},"Damage rules"),Object(a.b)("li",{parentName:"ul"},"Mob spawning rules")),Object(a.b)("p",null,"In other contexts, random filters will ",Object(a.b)("inlineCode",{parentName:"p"},"ABSTAIN"),"."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Examples")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),"\x3c!-- 50% chance that it will return either ALLOW or DENY --\x3e\n<random>0.5</random>\n\x3c!-- Also a 50% chance --\x3e\n\x3c!-- Any number from 0.25 to 0.75 including 0.25 but excluding 0.75 --\x3e\n<random>[0.25, 0.75)</random>\n")),Object(a.b)("h4",{id:"player-count-filter"},"Player Count Filter"),Object(a.b)("p",null,"This filter counts the number of players matching a single child filter,\nand matches if that count is within a specified range.\nThe child filter can be omitted, in which case all players in the match will be counted."),Object(a.b)("h5",{id:"player-count-filter-attributes"},"Player Count Filter Attributes"),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Attribute"),Object(a.b)("th",null,"Description"),Object(a.b)("th",null,"Value"),Object(a.b)("th",null,"Default"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"min")),Object(a.b)("td",null,"Minimum player count"),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Number")),Object(a.b)("td",null,"1")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"max")),Object(a.b)("td",null,"Maximum player count"),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"Number")),Object(a.b)("td",null,"oo (unlimited)")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"participants")),Object(a.b)("td",null,"Include participants (players actually playing) in the count."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"true/false")),Object(a.b)("td",null,"true")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"observers")),Object(a.b)("td",null,"Include observers in the count."),Object(a.b)("td",null,Object(a.b)("span",{className:"badge badge--primary"},"true/false")),Object(a.b)("td",null,"false"))))),Object(a.b)("h4",{id:"flag-filters"},"Flag Filters"),Object(a.b)("p",null,"The flag filters allow filtering of a specific flags current state or for the player that is carrying the flag. One important use of these filters is to implement the standard rule that a team can only capture an enemy flag when their own flag is returned. This can be implemented easily using a ",Object(a.b)("inlineCode",{parentName:"p"},"<flag-returned>")," as the capture-filter of a flag. This can also be done with the nets return attribute. However, using the return attribute will return dropped flags, while using a filter will not.\nThe flag carried, dropped, captured and returned filters have an optional ",Object(a.b)("inlineCode",{parentName:"p"},"post")," attribute to only match if the flag was last returned to that post."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'\x3c!-- The blue flag is currently being carried by a player --\x3e\n<flag-carried>blue-flag</flag-carried>\n\x3c!-- The blue flag has been carried away & dropped from the red-post --\x3e\n<flag-dropped post="red-post">blue-flag</flag-dropped>\n\x3c!-- The yellow flag is standing at one of its posts --\x3e\n<flag-returned>yellow-flag</flag-returned>\n\x3c!-- The yellow flag is standing at the green-post --\x3e\n<flag-returned post="green-post">yellow-flag</flag-returned>\n\x3c!-- The cyan flag has been captured but not yet returned --\x3e\n<flag-captured>cyan-flag</flag-captured>\n\x3c!-- The player currently carrying the purple flag --\x3e\n<carrying-flag>purple-flag</carrying-flag>\n')),Object(a.b)("h4",{id:"item-filters"},"Item Filters"),Object(a.b)("p",null,"These filters can be used to filter for players with specific items in their inventory. They accept a single ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/modules/gear/items"}),"item")," element. Only the item's type, durability/damage and meta data are compared. A item's meta data includes the item's name, enchantments, etc."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'\x3c!-- Player has a stick named \'Blue Door Key\' in their inventory --\x3e\n<carrying><item name="Blue Door Key" material="stick"/></carrying>\n\x3c!-- Player is holding a clock --\x3e\n<holding><item material="clock"/></holding>\n\x3c!-- Player is wearing a chainmail chestplate --\x3e\n<wearing><item material="chainmail chestplate"/></wearing>\n')),Object(a.b)("h4",{id:"event-cause-filters"},"Event Cause Filters"),Object(a.b)("p",null,"Cause filters are used to filter an event or action according to its cause."),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Element"),Object(a.b)("th",null,"Description"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<cause> </cause>")),Object(a.b)("td",null,"Filter an event's cause.")),Object(a.b)("tr",null,Object(a.b)("th",{colspan:"2"},"Cause: Actor Type")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"WORLD")),Object(a.b)("td",null,"World events such as ice melting, etc.")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"LIVING")),Object(a.b)("td",null,"Events caused by a living entity.")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"MOB")),Object(a.b)("td",null,"Events caused by a mob.")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"PLAYER")),Object(a.b)("td",null,"Events caused by a player.")),Object(a.b)("tr",null,Object(a.b)("th",{colspan:"2"},"Cause: Block Action")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"PUNCH")),Object(a.b)("td",null,"Events where a block is punched.")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"TRAMPLE")),Object(a.b)("td",null,"Events where a block is trampled.")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"MINE")),Object(a.b)("td",null,"Events where a block is mined.")),Object(a.b)("tr",null,Object(a.b)("th",{colspan:"2"},"Cause: Damage Type")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"MELEE")),Object(a.b)("td",null,Object(a.b)("label",null,"PROJECTILE"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"POTION")),Object(a.b)("td",null,Object(a.b)("label",null,"EXPLOSION"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"COMBUSTION")),Object(a.b)("td",null,Object(a.b)("label",null,"FALL"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"GRAVITY"),"Fall and void damage."),Object(a.b)("td",null,Object(a.b)("label",null,"VOID"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"SQUASH")),Object(a.b)("td",null,Object(a.b)("label",null,"SUFFOCATION"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"DROWNING")),Object(a.b)("td",null,Object(a.b)("label",null,"STARVATION"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"LIGHTNING")),Object(a.b)("td",null,Object(a.b)("label",null,"CACTUS"))),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"THORNS")),Object(a.b)("td",null))))),Object(a.b)("h4",{id:"player-relation-filters"},"Player Relation Filters"),Object(a.b)("p",null,"The relation filter is used when a player is damaged to check the relation between them and the damage cause.\nThis filter is only used in damage related contexts i.e., ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/modules/mechanics/damage"}),"damage filters"),", and ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/modules/gear/kill-rewards"}),"kill rewards")),Object(a.b)("div",{className:"table-container"},Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"Element"),Object(a.b)("th",null,"Description"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"<relation> </relation>")),Object(a.b)("td",null,"The relation between the player and their damage cause.")),Object(a.b)("tr",null,Object(a.b)("th",{colspan:"2"},"Values")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"NEUTRAL")),Object(a.b)("td",null,"Event has no attacker, e.g. world damage.")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"SELF")),Object(a.b)("td",null,"Events caused by the player. (Same player same team)")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"ALLY")),Object(a.b)("td",null,"Events caused by a player on the same team. (Different player same team)")),Object(a.b)("tr",null,Object(a.b)("td",null,Object(a.b)("label",null,"ENEMY")),Object(a.b)("td",null,"Events caused by an enemy player. (Different team)"))))),Object(a.b)("h4",{id:"structural-load-filters"},"Structural Load Filters"),Object(a.b)("p",null,"The structural load filter checks the number of gravity blocks that are attached to the queried block.\nIt returns ",Object(a.b)("inlineCode",{parentName:"p"},"ALLOW")," as long as the structural load is greater than or equal to the specified value and ",Object(a.b)("inlineCode",{parentName:"p"},"DENY")," otherwise."),Object(a.b)("span",{className:"badge badge--warning"},"Warning")," This filter is very computationally expensive to apply, XML authors should ensure that it is only run when absolutely necessary, e.g. by placing other filters above it. They should also not apply it to events that modify large amounts of blocks, such as explosions. This filter requires the falling blocks module to be loaded otherwise it will default to abstain.",Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Example")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'\x3c!--  Deny breaking structures longer than 3 blocks  --\x3e\n<not>\n    <all>\n        <cause>player</cause>\n        <filter name="structure-blocks"/>\n        <structural-load>3</structural-load>\n    </all>\n</not>\n')),Object(a.b)("h4",{id:"void-filter"},"Void Filter"),Object(a.b)("p",null,"If your map is especially complex shaped you may have to use the ",Object(a.b)("inlineCode",{parentName:"p"},"<void/>")," tag to shape your filtered region.\nThe ",Object(a.b)("inlineCode",{parentName:"p"},"<void/>")," tag checks the specified regions for blocks on the bottom layer of the world. It then creates an outline of those blocks and the specified filter is only active inside or outside that outline. Bridges are usually not detected because they are not at ",Object(a.b)("inlineCode",{parentName:"p"},"y=0"),". This can be fixed by creating a invisible silhouette of the bridge with block 36 at ",Object(a.b)("inlineCode",{parentName:"p"},"y=0"),"."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Example")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml"}),'<filters>\n    <not id="no-void">\n        <void/>\n    </not>\n</filters>\n<regions>\n    <apply block="no-void" message="You may not modify the void area!">\n        <region>\n            <rectangle id="main-area" min="65,860" max="290,980"/>\n        </region>\n    </apply>\n</regions>\n')))}u.isMDXComponent=!0},208:function(e,t,l){"use strict";l.d(t,"a",(function(){return o})),l.d(t,"b",(function(){return j}));var n=l(0),b=l.n(n);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function c(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?c(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):c(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,n,b=function(e,t){if(null==e)return{};var l,n,b={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(b[l]=e[l]);return b}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(b[l]=e[l])}return b}var s=b.a.createContext({}),u=function(e){var t=b.a.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):r({},t,{},e)),l},o=function(e){var t=u(e.components);return b.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},O=Object(n.forwardRef)((function(e,t){var l=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),o=u(l),O=n,j=o["".concat(c,".").concat(O)]||o[O]||d[O]||a;return l?b.a.createElement(j,r({ref:t},s,{components:l})):b.a.createElement(j,r({ref:t},s))}));function j(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=l.length,c=new Array(a);c[0]=O;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r.mdxType="string"==typeof e?e:n,c[1]=r;for(var s=2;s<a;s++)c[s]=l[s];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,l)}O.displayName="MDXCreateElement"}}]);