$(function(){
    // 购物车
    let shop=$(".shop");
    let shop_lx=$(".shop_lx");
    console.log(shop,shop_lx)
    shop.mouseenter(function(){
        shop_lx.clearQueue().slideDown();
    })
    shop.mouseleave(function(){
        shop_lx.clearQueue().slideUp();
    })
   
    // 侧边选项卡
    let parent=$(".bodder>dl>dd");
    let son=$(".bodder>dl>dd>img")
    console.log(parent,son);
    parent.mouseenter(function(){
        // let i=parent.index();
        // console.log(i);
        // son.css("display","none").eq(i).css("display","block");
        son.css("display","none");
        $(this).children("img").css("display","block");
    })
    parent.mouseleave(function(){
        // let i=parent.index();
        // console.log(i);
        // son.css("display","none").eq(i).css("display","block");
        son.css("display","none");
        
    })
    // 轮播图·
    let img=$(".bodder>img");
    console.log(img);
    let t=setInterval(move,1000);
    let now=0;
    function move(){
        now++;
        if(now==img.length){
            now=0;
        }
        img.css("z-index","-999").eq(now).css("z-index","-998");
        $(".lx_h1").removeClass("active").eq(now).addClass("active");
        
    }
    function movel(){
        now--;
        if(now<0){
            now=img.length-1;
        }
        img.css("z-index","-999").eq(now).css("z-index","-998");
        
        $(".lx_h1").removeClass("active").eq(now).addClass("active");
    }
    $(".bodder>ol>li").click(function(){
        movel()
    });
    $(".bodder>ol>ul").click(function(){
        move()
    });
    $(".bodder>ol").mouseenter(function(){
        clearInterval(t);
    })
    $(".bodder>ol").mouseleave(function(){
        t=setInterval(move,1000);
    })
    $(".lx_h1").click(function(){
        let i=$(this).index();
        console.log(i);
        img.css("z-index","-999").eq(i).css("z-index","-998");
        $(".lx_h1").removeClass("active").eq(i).addClass("active");
    })

    // 平移
    let left=$(".lx_left");
    let right=$(".lx_right");
    let w=$("article .second .second1").css("width").replace(/[^0-9]/g, "");
    console.log(left,right,w);
    let times=0;
    right.click(function(){
        times++;
        if(times==3){
            times=2;
        }
        $("article .second .second1").css("transform","translate("+(-w/3*times)+"px"+")")
    })
    left.click(function(){
        times--;
        if(times==-1){
            times=0;
        }
        $("article .second .second1").css("transform","translate("+(-w/3*times)+"px"+")")
    })

    // 为你推荐
    let left1=$(".lx_left1");
    let right1=$(".lx_right1");
    let W=$(".num .second .second1").css("width").replace(/[^0-9]/g, "");
    console.log(left1,right1,W);
    let a=0;
    right1.click(function(){
        a++;
        if(a==3){
            a=2;
        }
        $(".num .second .second1").css("transform","translate("+(-w/3*a)+"px"+")")
    })
    left1.click(function(){
        a--;
        if(a==-1){
            a=0;
        }
        $(".num .second .second1").css("transform","translate("+(-w/3*a)+"px"+")")
    })

    // 家电选项卡
    let parent1=$(".set1 .box1 a");
    let son1=$(".set1 .box2 .hcl2");
    console.log(parent1,son1);
    parent1.mouseenter(function(){
        let i=$(this).index();
        console.log(i);
        parent1.removeClass("bot").eq(i-1).addClass("bot");
        son1.css("display","none").eq(i-1).css("display","block");
    })

    // 返回顶部
    let top=$(".top");
    top.click(function(){
        $(document.body).animate({scrollTop:0},"slow");
        $(document.documentElement).animate({scrollTop:0},"slow");
    })
    window.onscroll=function(){
        let gundong=$(document.body).scrollTop()||$(document.documentElement).scrollTop();
        if(gundong>500){
            top.css("display","block");
        }else{
            top.css("display","none");
        }
    }

    // 小轮播图
    let left3=$(".last .box2 li:nth-of-type(1) .left");
    let right3=$(".last .box2 li:nth-of-type(1) .right");
    let img3=$(".last .box2 li:nth-of-type(1) .sett");
    let son3=$(".last .box2 li:nth-of-type(1) .son");
    console.log(left3,right3,img3,son3);
    banner_Xm(img3,son3,left3,right3);
    let left4=$(".last .box2 li:nth-of-type(2) .left");
    let right4=$(".last .box2 li:nth-of-type(2) .right");
    let img4=$(".last .box2 li:nth-of-type(2) .sett");
    let son4=$(".last .box2 li:nth-of-type(2) .son");
    console.log(left4,right4,img4,son4);
    banner_Xm(img4,son4,left4,right4);
    let left5=$(".last .box2 li:nth-of-type(3) .left");
    let right5=$(".last .box2 li:nth-of-type(3) .right");
    let img5=$(".last .box2 li:nth-of-type(3) .sett");
    let son5=$(".last .box2 li:nth-of-type(3) .son");
    banner_Xm(img5,son5,left5,right5);
    let left6=$(".last .box2 li:nth-of-type(4) .left");
    let right6=$(".last .box2 li:nth-of-type(4) .right");
    let img6=$(".last .box2 li:nth-of-type(4) .sett");
    let son6=$(".last .box2 li:nth-of-type(4) .son");
    banner_Xm(img6,son6,left6,right6);
    
    // 倒计时
    fn();
    setInterval(fn,1000);
    function fn(){
        let now=new Date;
        let future=new Date(2018,9,1,18,00,00);
    
        let time=Math.floor((future.getTime()-now.getTime())/1000);
         console.log(time);
        // let arr=[];
        // let month=Math.floor(time/(60*60*24*30));
        // arr.push(month);
        // let day=Math.floor(time%(60*60*24*30)/(60*60*24));
        // arr.push(day);
        let h=Math.floor(time%(60*60*24*30)%(60*60*24)/(60*60));
        $(".hours").html("0"+h);
        let m=Math.floor(time%(60*60*24*30)%(60*60*24)%(60*60)/60);
        $(".m").html(m);
        let s=Math.floor(time%(60*60*24*30)%(60*60*24)%(60*60)%60);
        $(".s").html(s);
        // console.log(arr);
        // let span=$("");
        // span.forEach((v,index)=>{v.innerHTML=arr[index]
        // })

    }
})