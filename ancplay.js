 var $_ = function(x){if(!document.getElementById){return;} else{ return document.getElementById(x);}};
var $$_ = function(x,y){return document.getElementById(x).getElementsByTagName(y);},p_str="", M = new Media();

function Media(){
        this.re = function(x){
                y = $_(x).innerHTML;
                y = y.replace(/\[id\]/gi,"<span id='anc_id' style = 'display: none;'>");
                y = y.replace(/\[\/id\]/gi,"</span>");
                $_(x).innerHTML = y;
                                
                                z = $_("anc_id").innerHTML;
                                
                                if(z.indexOf('|') == -1 && z.indexOf(';') == -1){z = "Xem Full;"+z+"|";}
                return z;
        }

        this.pl = function(x,y,z){      
        if(x.indexOf('|') != -1){
                var g = function(a,b){return x.split('|')[a].split(';')[b];},m = function(a){return x.split('|')[a].split(';').length;}, n = x.split('|').length;
          ii=["0","a","b","c","d","e","f","g","h","i","k","l","m","n","o","p","q","r","s"],ab="",po=" ", 
            t=["Server Youtube: ","Server Videobb: ","Server Clip.vn: ","Server CyWorld: ","Server Zing: ","Server PUB.VN: ","Server Daily:","Server Videozer:","Server 4shared:","Server 2shared:"], 
		  tt = ["youtube.com","videobb.com","clip.vn","cyworld.vn","video.zing.vn","stream.pub.vn","dailymotion.com","videozer.com","4shared.com","2shared.com"];
                h = g(0,1);
        }else{h=x;}
        
                ot = M.ob(h);
                
        if($$_(z,'a').length == 0){     
                if(n>1){
                        for(var i = 0 ; i<n ; i++){
                        k = g(i,0);
							for(var j = 1; j< m(i); j++){
								w = g(i,j); if(m(i)==2){ab="";}else{ab=ii[j];}
								if(k != "Xem Full"){
								//Check
								if(w.indexOf("octoshape") != -1){
									po += "<a href='#xem_phim?"+k+"' onclick=\"Rload('"+w+"')\"> "+k+ab+" </a> ";
									}else{
										for(var f=0; f<t.length; f++){
											if(w.indexOf(tt[f]) != -1){
											t[f] = "<span class='ancplay_fd'>"+t[f]+"</span>";
													t[f] += "<a href='#xem_phim?"+k+"' onclick=\"M.pl('"+w+"','"+y+"','"+z+"')\"> "+k+ab+" </a> ";
											}
										}
									}
								//Endcheck      
								}else{
								if(w.indexOf("octoshape") != -1){
								po += "<a href='#xem_phim' onclick=\"Rload('"+w+"')\"> Xem Full </a>";}
								else{po += "<a href='#xem_phim' onclick=\"M.pl('"+w+"','"+y+"','"+z+"')\"> Xem Full </a>";}
								}
							}
                }
                }
                for(var r=0; r<t.length; r++){ if(t[r].indexOf('</a>') != -1){
                        $_(z).innerHTML += "<span id='anc_"+r+"'>"+t[r]+"</span><br/>";
                }}
                $_(y).innerHTML = ot;
                $_(z).innerHTML += po;
                
        }else{$_(y).innerHTML = ot;}
        }
        
        this.ob = function(x){
        if(x.indexOf(tt[0]) != -1){
                        x = x.replace(/\/watch\?v=/gi,"/embed/");
                                                x = x.replace(/\&feature=related/gi,"");
                        obj = o(x)[0];
                }
        if(x.indexOf(tt[1]) != -1){
                        x = "http://www.videobb.com/e/"+x.match(/([-|~_0-9A-Za-z]+$)/g);
                        obj = o(x)[3];
                }
        if(x.indexOf(tt[2]) != -1){obj = o(x)[3];}
        		if(x.indexOf(tt[4]) != -1 ){
                x = x.replace(/\/video\//gi,"/player/flvPlayer.swf?=false&xmlFile=")
                    obj = o(x)[3];                
        }	
        if(x.indexOf(tt[5]) != -1 || x.indexOf(tt[3]) != -1 || x.indexOf(tt[8]) != -1 || x.indexOf(tt[9]) != -1 ){obj = o(x)[2];}
      	 if(x.indexOf(tt[6]) != -1){
           x = x.replace(/\/video\//gi,"/embed/video/");
           obj = o(x)[0];
        }
		 if(x.indexOf(tt[7]) != -1){
           x = "http://videozer.com/embed/"+x.match(/([-|~_0-9A-Za-z]+$)/g);
           obj = o(x)[3];
        }
        if(x.indexOf("octoshape") != -1){obj = o(x)[1];}
                return obj;
        }
}

var o = function(u){
        var ki = "allowfullscreen='true' allowscriptaccess='always' width='640' height='420' type='application/x-shockwave-flash'", sr = "src='"+u+"?autoplay=1&showinfo=0&rel=0&fs=1'";
return data = ["<iframe  "+ki+sr+" frameborder='0' ></iframe>","<object data='http://cdn.octoshape.net/resources/player/infinitehd/player1.swf' name='player' id='player' "+ki+"></object>","<object data='http://rilwis.googlecode.com/svn/trunk/blogger/jw.swf' flashvars = 'autostart=true&backcolor=#000&frontcolor=#8A2BE2&file="+u+"' "+ki+"></object>","<embed "+ki+sr+"></embed>"];}
