var darkkk = document.getElementById(togel);
        togel.onclick = function(){
            document.body.classList.toggle("dark-theme");
            if(document.body.classList.contains("dark-theme")){
                togel.src ="sun.png";
            }else{
                togel.src = "moon.png";
            }
        }

        document.getElementById("year").innerHTML = new Date().getFullYear();

        function buy(product_name, product_price) {
          const message = `Halo saya mau beli ${product_name} Rp${product_price}`
          const whatsapp = `https://wa.me/6288227852900?text=${message}`
          open(whatsapp, "_blank")
        }
        
        function chat(ask){
            const message = `${ask}`
          const whatsapp = `https://wa.me/6288227852900?text=${message}`
          open(whatsapp, "_blank")
        }
        function jam(bodol){
            const message = `${bodol}`
          const whatsapp = `https://wa.me/6288227852900?text=${message}`
          open(whatsapp, "_blank")
        }

        function aaabot() {
            var x = document.getElementById("aboot");
            var y = document.getElementById("projjk");
            if(x.style.display === "block"){
              
            }
            else{
                x.style.display = "block";
                y.style.display = "none";
            }
        }

        function prjk() {
            var y = document.getElementById("projjk");
            var x = document.getElementById("aboot");
            if(y.style.display === "block"){
                
            }
            else{
                y.style.display = "block";
                x.style.display = "none";
            }
        }
        var popup = document.getElementById("popup");
        function openPopup(){
            popup.classList.add("open-popup");
        }
        function closePopup(){
            popup.classList.remove("open-popup");
        }
