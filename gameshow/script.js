            var values = ["1", "100", "500", "10,000", "25,000", "50,000", "75,000", "100,000", "200,000","300,000","400,000","500,000","750,000","1,000,000","2,500,000","5,000,000"];
            var colorvalues = ["white","celeste","cherry","lime","kobold","dragoon","regal","rose", "ruby", "rhotano", "sky blue", "orange", "morbol","dalamud","yellow","lavender"];
            var colors = [];
            var rowsize = 4;
            var shuffled = [];
            var clicked = 0;
            var savelist = [];
            var loadlist = [];
            var buttonamt = values.length;
            var winval = "";
            var wintime = "";


            function startup()
            {
                //load();
                if(clicked == 0)
                {
                    shuffle();
                    build();
                    console.log(shuffled);
                }
                else
                {
                    document.getElementById("buttons").innerHTML = "You already scratched a card and the value you won was "+ winval; 
                }
            }

            function shuffle()
            {
                for(i = 0; i<buttonamt; i++)
                {
                    var pick = Math.floor(Math.random()*values.length);
                    shuffled.push(values[pick]);
                    values.splice(pick,1);
                }
            }

            function build()
            {
                document.getElementById("buttons").innerHTML=""; //clear this first
                for (var j=buttonamt; j > 0 ; j--)
                {
                    document.getElementById("buttons").innerHTML += "<button id=\"scratcher" + j + "\" class=\"scratcher\" onclick=\"scratch("+j+")\">" + colorvalues[j-1] + "</button>";
                    if (j%rowsize == 1)
                    {
                        document.getElementById("buttons").innerHTML += "<br>";
                    }
                }
            }

            function scratch(nr)
            {
                if(clicked == 0)
                {
                    let targetscratcher = "scratcher"+nr; 
                    winval = shuffled[nr-1];
                    document.getElementById(targetscratcher).innerHTML = winval;
                    //clicked = 1;
                    //wintime = Date.now();
                    //save();
                }
            }
/*
            function save()
            {
                savelist = [clicked, winval, wintime];
                localStorage.setItem("savelist", JSON.stringify(savelist));
            }

            function load()
            {
                if (localStorage.getItem("savelist"))
                {
                    var s = localStorage.getItem("savelist");
                    savelist = JSON.parse(s);
                    clicked = savelist[0];
                    winval = savelist[1];
                    wintime = savelist[2];
                    console.log(savelist);
                }
            }
*/
            function clearsave()
            {
                //localStorage.clear();
                location.reload();
            }