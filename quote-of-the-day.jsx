export const command = () => {
	
	const categries = ["death", "love", "life", "funny", "inspire", "art"];
	
	const current_category = categries[3];
	
	const method = "GET",
	  url = "https://quotes.rest/qod?category=" + current_category + "&language=en";
	  
	fetch(url).then(response => response.json()).then((data) => {
		// The request has been completed successfully
		if (data.success.total >= 1) {
			let qodInfos = data.contents.quotes[0];
			localStorage.setItem("quote_title", qodInfos.title);
			localStorage.setItem("quote", qodInfos.quote);
			localStorage.setItem("author", qodInfos.author);
			localStorage.setItem("background", qodInfos.background);
		} else {
			// Set a default quote
			localStorage.setItem("quote_title", qodInfos.title);
		    localStorage.setItem("quote", "Never stop being a good person because of bad people.");
		    localStorage.setItem("author", "Someone on the web");
		}
	});
  }

// the refresh frequency in milliseconds
// 21600000 = every 6h
// 43200000 = every 12h
// 86400000 = every 24h / day
export const refreshFrequency = 21600000;

// Extract quote from local storage
export const quote = localStorage.getItem("quote");
export const title = localStorage.getItem("quote_title");
export const author = localStorage.getItem("author");
export const image = localStorage.getItem("background");

export const className =
  `
	bottom: 100px;
	left: 25%;
	width: 960px;
	font-weight: 500;
	font-family: -apple-system, Verdana;
	color: #fff;

	.quote-of-the-day {
		padding: 1.1rem;
		border-radius: .4rem;
		position: relative;
		z-index: 1;
	}
	.quote-of-the-day::before {
		//background: rgba(0,0,0,0.2);
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		content: "";
		z-index: -1;
		position: absolute;
		border-radius: .4rem;
	}
	.title {
		text-align: center;
		margin-bottom: 0;
		color: #bbb;
	}
	.quote {
		font-size: 1rem;
		text-align: center
	}
	.author {
		font-size: 1rem;
		color: #ccc; 
		text-align: end;
		margin-top: 1rem;
		display: block
	}
	hr {
		max-width: 50%;
		margin-top: 2rem;
		border: 2px solid #fff;
	}
	.image {
		width: 64px;
		height: 64px;
		position: absolute;
		top: 10px;
		right: 10px;
		border-radius: .4rem;
		box-shadow: 0 0 15px -5px #000;
	}
`;

export const render = () => {
  return (
	<div>
		<hr />
		<div className="quote-of-the-day">
			<h5 className="title">{title}</h5>
			<p className="quote">{quote}</p>
			<span className="author">by {author}</span>
			<img className="image" src={image}/>
		</div>
	</div>
  );
};
