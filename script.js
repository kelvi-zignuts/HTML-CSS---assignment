
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
