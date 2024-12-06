var cbot = document.getElementById("chat-box");
var data= {
    chatinit:{
        title: [" Welcome to Handhaliyat! <span class='emoji'> &#128075;</span>","Thank you for joining our mission to support the Palestinian cause. Have you had a chance to contribute by donating or volunteering with us?","Your support makes a meaningful impact!"],
        options: ["I ve already Donated","Ive already Volunteered","Never had the chance"]
    },
    i: {
        title:["Thank you for your generous donation!Your generosity is a ray of light for those facing the darkness of war"," Did you know that by incorporating small, impactful actions into your daily routine"," you can magnify the positive change you're already making?"],
        options:['Yes','Nope'],
        url : {
            
        }
    },
    
    yes: {
        title:["It's great to hear that you already aware!Your commitment is truly honourable.","By incorporating mindful choices into your daily routines, you actively help preventing the escalation of the horrors of war and the horrifying loss of human life.","hand in hand,Till we stop this unmerciful war!"],
        options:[],
        url : {
            
        }
    },
    nope: {
        title:["If you're looking for effective daily actions to support the Palestinian cause,here's what to do! Share timely articles on your social networks, highlighting the harsh realities of war. ","Your efforts to raise awareness help keep others informed, leading to a better understanding of the impact of this ceaseless battle."," In addition, consider defending the cause by boycotting products from brands that support colonization and by supporting local supply alternatives."," Every action, no matter how small, plays a vital role. Together, we can make a significant impact."," Ready to be part of the movement for change? Explore our local_products section now!"],
        options:[],
        url : {
            
        }
    },
    ive: {
        title:["Thank you for volunteering!","Your commitment ensures that donations reach those in need faster. Your actions help prevent people from facing the dire challenges of hunger and lack of essentials."," Did you know that by incorporating small, impactful actions into your daily routine"," you can magnify the positive change you're already making?"],
        options:['Yes','No'],
        url : {
        }
    },
    yeah: {
        title:["It's great to hear that you already aware!Your commitment is truly honourable. ","By incorporating mindful choices into your daily routines, you actively help preventing the escalation of the horrors of war and the horrifying loss of human life."],
        options:['Make-up & Nails','Skin Care','Fragrance','Hair care'],
        url : {
            more:"https://www.youtube.com/@webhub/videos",
            link:["#","#","#","#"]
        }
    },
    never: {
        title:["I appreciate your interest! Your support can truly make a difference in the lives of those affected by the consequences of war in Gaza.","By volunteering or making a donation, you're directly impacting someone's life, offering them essentials and hope.","By volunteering or making a donation, you're directly impacting someone's life, offering them essentials and hope."],
        options:['Intrested to know more!','Not intrested'],
        url : {
        }
    },
    intrested: {
        title:["If you're looking for effective daily actions to support the Palestinian cause,here's what to do! Share timely articles on your social networks, highlighting the harsh realities of war.","These are some results based on your input","Click on it to know more","Your efforts to raise awareness help keep others informed, leading to a better understanding of the impact of this ceaseless battle."," In addition, consider defending the cause by boycotting products from brands that support colonization and by supporting local supply alternatives.","Every action, no matter how small, plays a vital role. Together, we can make a significant impact. Ready to be part of the movement for change? Explore our local_products section now!"],
        options:[],
        url : {
        }
    },
   not: {
        title:["I deeply respect your choice.","We all share the common goal of creating a better and more peaceful world."," If you ever change your mind or simply want to learn more, feel free to take a visit to our website. We hope you have a great experience!"],
        options:[],
        url : {
        }
    },
   
}

document.getElementById("init").addEventListener("click", showChatBot);


function showChatBot() {
    console.log("Button clicked"); 
    var chatBotElement = document.getElementById('test');
    var initButton = document.getElementById('init');

    if (chatBotElement && initButton) {
        if (initButton.classList.contains('closed')) {
            chatBotElement.style.display = 'block';
            initButton.classList.remove('closed');
            initButton.classList.add('open');
            initButton.innerHTML = '<i class="fa fa-times"></i>';
            initChat();
        } else {
            chatBotElement.style.display = 'none';
            initButton.classList.remove('open');
            initButton.classList.add('closed');
            initButton.innerHTML = '<i class="fa fa-comments"></i>';
        }
    } else {
        console.error("Element not found. Check if 'test' and 'init' elements exist.");
    }
}

function initChat(){
    var len1 = data.chatinit.title.length;
    j=0;
    cbot.innerHTML='';
    for(var i=0;i<len1;i++){
        setTimeout(handleChat,(i*500));
    }
    setTimeout(function(){
        showOptions(data.chatinit.options)
    },((len1+1)*500))
}

var j=0;
function handleChat(){
    console.log(j);
    var elm= document.createElement("p");
    elm.innerHTML= data.chatinit.title[j];
    elm.setAttribute("class","msg");
    cbot.appendChild(elm);
    j++;
    handleScroll();
}

function showOptions(options){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<div>'+options[i]+'</div>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        opt.addEventListener("click", handleOpt);
        cbot.appendChild(opt);
        handleScroll();
    }
}

function handleOpt(){
    console.log(this);
    var str= this.innerText;
    var textArr= str.split(" ");
    var findText= textArr[0];
    
    document.querySelectorAll(".opt").forEach(el=>{
        el.remove();
    })
    var elm= document.createElement("p");
    elm.setAttribute("class","test");
    var sp= '<span class="rep">'+this.innerText+'</span>';
    elm.innerHTML= sp;
    cbot.appendChild(elm);

    console.log(findText.toLowerCase());
    var tempObj= data[findText.toLowerCase()];
    handleResults(tempObj.title,tempObj.options,tempObj.url);
}

function handleDelay(title){
    var elm= document.createElement("p");
        elm.innerHTML= title;
        elm.setAttribute("class","msg");
        cbot.appendChild(elm);
}


function handleResults(title,options,url){
    for(let i=0;i<title.length;i++){
        setTimeout(function(){
            handleDelay(title[i]);
        },i*500)
        
    }

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    if(isObjectEmpty(url)==true){
        console.log("having more options");
        setTimeout(function(){
            showOptions(options);
        },title.length*500)
        
    }
    else{
        console.log("end result");
        setTimeout(function(){
            handleOptions(options,url);
        },title.length*500)
        
    }
}

function handleOptions(options,url){
    for(var i=0;i<options.length;i++){
        var opt= document.createElement("span");
        var inp= '<a class="m-link" href="'+url.link[i]+'">'+options[i]+'</a>';
        opt.innerHTML=inp;
        opt.setAttribute("class","opt");
        cbot.appendChild(opt);
    }
    var opt= document.createElement("span");
    var inp= '<a class="m-link" href="'+url.more+'">'+'See more</a>';

    const isObjectEmpty= (url)=>{
        return JSON.stringify(url)=== "{}";
    }

    console.log(isObjectEmpty(url));
    console.log(url);
    opt.innerHTML=inp;
    opt.setAttribute("class","opt link");
    cbot.appendChild(opt);
    handleScroll();
}

function handleScroll(){
    var elem= document.getElementById('chat-box');
    elem.scrollTop= elem.scrollHeight;
}