import newey from './newey.jpg';
import steiner from './steiner.jpg';
import skunk from './skunk.jpg'

const books = [
    {
      title: "Skunk Works: A Personal Memoir of My Years at Lockheed",
      author: "Ben R. Rich, Leo Janos",
      img: skunk
    },
    {
      title: "How To Build A Car",
      author: "Adrian Newey",
      img: newey
    },
    {
      title: "Surviving to Drive",
      author: "Guenther Steiner",
      img: steiner
    }
  ]


books.forEach((book) => {console.log(`book ${book.title}`)})  
let elements = books.map((book => {
    return `<div>${book}<div/>`
}))

console.log(elements)

export default books

/*function book(props) {
    console.log(props)
    return(
        <div>
            <h2>{props.title}</h2>
            <h3>{props.author}</h3>
            <img>{props.img}</img>
        </div>
        /*<div>
            <h2>Skunk Works: A Personal Memoir of My Years at Lockheed</h2>
            <h3>Ben R. Rich, Leo Janos</h3>
            <p>From the development of the U-2 to the Stealth fighter, the never-before-told story behind the high-stakes quest to dominate the skies Skunk Works is the true story of America's most secret & successful aerospace operation. As recounted by Ben Rich, the operation's brilliant boss for nearly two decades, the chronicle of Lockheed's legendary Skunk Works is a drama of cold war confrontations and Gulf War air combat, of extraordinary feats of engineering & achievement against fantastic odds. Here are up-close portraits of the maverick band of scientists & engineers who made the Skunk Works so renowned. Filled with telling personal anecdotes & high adventure, with narratives from the CIA & from Air Force pilots who flew the many classified, risky missions, this book is a portrait of the most spectacular aviation triumphs of the 20th century.</p>
            <img src='newey'/>
            <h2>How To Build A Car</h2>
            <h3>Adrian Newey</h3>
            <p>The world’s foremost designer in Formula One, Adrian Newey OBE is arguably one of Britain’s greatest engineers and this is his fascinating, powerful memoir.


How to Build a Car explores the story of Adrian’s unrivalled 35-year career in Formula One through the prism of the cars he has designed, the drivers he has worked alongside and the races in which he’s been involved.


A true engineering genius, even in adolescence Adrian’s thoughts naturally emerged in shape and form – he began sketching his own car designs at the age of 12 and took a welding course in his school summer holidays. From his early career in IndyCar racing and on to his unparalleled success in Formula One, we learn in comprehensive, engaging and highly entertaining detail how a car actually works. Adrian has designed for the likes of Mario Andretti, Nigel Mansell, Alain Prost, Damon Hill, David Coulthard, Mika Hakkinen, Mark Webber and Sebastian Vettel, always with a shark-like purity of purpose: to make the car go faster. And while his career has been marked by unbelievable triumphs, there have also been deep tragedies; most notably Ayrton Senna’s death during his time at Williams in 1994.</p>
            <img/>
            <h2>Surviving to Drive</h2>
            <h3>Guenther Steiner</h3>
            <p>People talk about football managers being under pressure. Trust me, that's nothing. Pressure is watching one of your drivers hit a barrier at 190mph and exploding before your eyes...'Guenther Steiner is one of motor racing's biggest and most celebrated characters, known to millions for his show-stealing appearances on Netflix's hugely popular fly on the wall series, Drive to Survive .In Surviving to Drive , the Haas team principal takes readers inside his Formula 1 team for the entirety of the 2022 season, giving an unobstructed view of what really takes place behind the scenes. Through this unique lens, Guenther takes us on the thrilling rollercoaster of life at the heart of high stakes motor racing. Packed full of twists and turns, from hiring and firing drivers, balancing books, pre-season preparations, the design, launch and testing of a car - and of course, the race calendar itself - this is the first time that an F1 team has allowed an acting team principal to tell the full story of a whole season.Uncompromising and searingly honest, told in Steiner's inimitable style, this is a fascinating and hugely entertaining account of the realities of running a Formula 1 team.</p>
            <img/>
        </div>
    )
    }*/




/*function City(props) {
    console.log(props)

    let cityStyle = "";
        if(props.country === "GB"){
            cityStyle = "gb-city"
        }
    
    let remarks = ""
    if (props.country === "GB"){
        remarks = (<p>{props.remarks}</p>)
    }
        
    return(
        <div>
            <h2 className={cityStyle}>{props.name}, {props.country} {remarks}</h2>
        </div>
    )
}

export default City


    return(
        <div>
            <h2>Skunk Works: A Personal Memoir of My Years at Lockheed</h2>
            <h3>Ben R. Rich, Leo Janos</h3>
            <p>From the development of the U-2 to the Stealth fighter, the never-before-told story behind the high-stakes quest to dominate the skies Skunk Works is the true story of America's most secret & successful aerospace operation. As recounted by Ben Rich, the operation's brilliant boss for nearly two decades, the chronicle of Lockheed's legendary Skunk Works is a drama of cold war confrontations and Gulf War air combat, of extraordinary feats of engineering & achievement against fantastic odds. Here are up-close portraits of the maverick band of scientists & engineers who made the Skunk Works so renowned. Filled with telling personal anecdotes & high adventure, with narratives from the CIA & from Air Force pilots who flew the many classified, risky missions, this book is a portrait of the most spectacular aviation triumphs of the 20th century.</p>
            <img></img>
            <h2>How To Build A Car</h2>
            <h3>Adrian Newey</h3>
            <p>The world’s foremost designer in Formula One, Adrian Newey OBE is arguably one of Britain’s greatest engineers and this is his fascinating, powerful memoir.


How to Build a Car explores the story of Adrian’s unrivalled 35-year career in Formula One through the prism of the cars he has designed, the drivers he has worked alongside and the races in which he’s been involved.


A true engineering genius, even in adolescence Adrian’s thoughts naturally emerged in shape and form – he began sketching his own car designs at the age of 12 and took a welding course in his school summer holidays. From his early career in IndyCar racing and on to his unparalleled success in Formula One, we learn in comprehensive, engaging and highly entertaining detail how a car actually works. Adrian has designed for the likes of Mario Andretti, Nigel Mansell, Alain Prost, Damon Hill, David Coulthard, Mika Hakkinen, Mark Webber and Sebastian Vettel, always with a shark-like purity of purpose: to make the car go faster. And while his career has been marked by unbelievable triumphs, there have also been deep tragedies; most notably Ayrton Senna’s death during his time at Williams in 1994.</p>
            <img></img>
            <h2>Surviving to Drive</h2>
            <h3>Guenther Steiner</h3>
            <p>People talk about football managers being under pressure. Trust me, that's nothing. Pressure is watching one of your drivers hit a barrier at 190mph and exploding before your eyes...'Guenther Steiner is one of motor racing's biggest and most celebrated characters, known to millions for his show-stealing appearances on Netflix's hugely popular fly on the wall series, Drive to Survive .In Surviving to Drive , the Haas team principal takes readers inside his Formula 1 team for the entirety of the 2022 season, giving an unobstructed view of what really takes place behind the scenes. Through this unique lens, Guenther takes us on the thrilling rollercoaster of life at the heart of high stakes motor racing. Packed full of twists and turns, from hiring and firing drivers, balancing books, pre-season preparations, the design, launch and testing of a car - and of course, the race calendar itself - this is the first time that an F1 team has allowed an acting team principal to tell the full story of a whole season.Uncompromising and searingly honest, told in Steiner's inimitable style, this is a fascinating and hugely entertaining account of the realities of running a Formula 1 team.</p>
            <img></img>
        </div>*/
        
            /*return(
        <div className={bookBody}>
            <h2>{props.title}</h2>
            <h3>{props.author}</h3>
            <p>{props.text}</p>
            <img>{props.img}</img>
        </div>
    )    
    }*/