//for selling
let swipeContainer = document.querySelector('.show');
        let backBtn = document.getElementById("backBtn");
        let nextBtn = document.getElementById("nextBtn");
        swipeContainer.addEventListener('wheel', (evt) => {
            evt.preventDefault();
            swipeContainer.scrollLeft += evt.deltaY;
        });

        nextBtn.addEventListener('click', () => {
            // scrollContainer.style.scrollBehavior = "smooth";
            swipeContainer.scrollLeft += 900;
        });
        backBtn.addEventListener('click', () => {
            // scrollContainer.style.scrollBehavior = "smooth";
            swipeContainer.scrollLeft -= 900;
        });

        //for review
        let swipeContainer1 = document.querySelector('.testimonial-info');
        let backBtn1 = document.getElementById("backBtn1");
        let nextBtn1 = document.getElementById("nextBtn1");
        swipeContainer1.addEventListener('wheel', (evt) => {
            evt.preventDefault();
            swipeContainer1.scrollLeft += evt.deltaY;
        });

        nextBtn1.addEventListener('click', () => {
            // scrollContainer.style.scrollBehavior = "smooth";
            swipeContainer1.scrollLeft += 900;
        });
        backBtn1.addEventListener('click', () => {
            //scrollContainer.style.scrollBehavior = "smooth";
            swipeContainer1.scrollLeft -= 900;
        });

        const toggle=()=>{
            document.getElementById('nav').classList.toggle('navactive')
        }

        let chair = document.getElementById("Chair");
        let bed = document.getElementById("Beds");
        let sofa = document.getElementById("Sofa");
        let lamp = document.getElementById("Lamp");

        chair.style.display = 'flex';
        bed.style.display = 'none';
        sofa.style.display = 'none';
        lamp.style.display = 'none';


        function openChair(){
            chair.style.display = 'flex';
            bed.style.display = 'none';
            sofa.style.display = 'none';
            lamp.style.display = 'none';
        }

        function openBeds(){
            chair.style.display = 'none';
            bed.style.display = 'flex';
            sofa.style.display = 'none';
            lamp.style.display = 'none';
        }

        function openSofa(){
            chair.style.display = 'none';
            bed.style.display = 'none';
            sofa.style.display = 'flex';
            lamp.style.display = 'none';
        }

        function openLamp(){
            chair.style.display = 'none';
            bed.style.display = 'none';
            sofa.style.display = 'none';
            lamp.style.display = 'flex';
        }