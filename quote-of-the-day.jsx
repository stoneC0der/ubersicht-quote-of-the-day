export const command = () => {
	/*********************************************************************
	 * Choose one of the category below
	 * Index start at 0
	 *********************************************************************/
	
	const categories = ["death", "love", "life", "funny", "inspire", "art"];
	/*********************************************************************
	 * Set category here using Index number
	 *********************************************************************/
	
	const current_category = categories[3];
	/*
	 * DO not edit
	 */
	
	const url = `https://quotes.rest/qod?category=${current_category}&language=en`;
	
	/**
	 * Fetch the quote
	 */
	fetch(url).then(response => response.json()).then((data) => {
		let qodInfos = data.contents.quotes[0];
		// Store quote as json string
		localStorage.setItem('quote_of_the_day',JSON.stringify({
			title: qodInfos.title,
			quote: qodInfos.quote,
			author: qodInfos.author,
			background: qodInfos.background,
		}));
	}).catch(error => {
		//the was an error, probably a network error
		// Fall back is to use the locally stored data if offline
		// in case of first time running, open an issue on github or send error log
		console.log('Quote of the Day Error: ', error);
	});
  }

/*********************************************************************
 * the refresh frequency in milliseconds
 * 21600000 = every 6h
 * 43200000 = every 12h
 * 86400000 = every 24h / day
 *********************************************************************/
export const refreshFrequency = 21600000;
/*********************************************************************
 * Extract quote from local storage
 *********************************************************************/
export const quote_of_the_day = JSON.parse(localStorage.getItem('quote_of_the_day'));

/**********************************************************************
 * Style here
 **********************************************************************/
export const className =
`
	bottom: 80px;
	left: 0;
	width: 100%;
	font-weight: 500;
	font-family: -apple-system, Verdana;
	color: #fff;
	line-height: 1.875rem;
	
	.quote-of-the-day-container {
		margin: 0 auto;
		max-width: 960px;
	}
	
	quoteblock, h5, cite {
		text-shadow: 0px 0px 2px rgba(0,0,0,0.30);
	}

	.quote-of-the-day {
		padding: 1rem;
		border-radius: .4rem;
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.quote-of-the-day::before {
		background: rgba(9, 10, 13, 0.10);
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		content: "";
		z-index: -1;
		position: absolute;
		border-radius: .8rem;
	}
	.title {
		text-align: center;
		margin: 0 auto 0.5rem auto;
		color: #cfcfcf;
	}
	.quote {
		font-size: 1rem;
		text-align: center;
		margin-bottom: 0.5rem
		margin-right: 4.5rem;
		margin-top: 0;
		max-width: 85%
	}
	.quote::before {
		content: '"';
		font-size: 1.5rem;
	}
	.quote::after {
		content: '"';
		font-size: 1.5rem;
	}
	.author {
		font-size: .860rem;
		color: #ccc; 
		text-align: end;
		display: block;
		align-self: flex-end;
	}
	.image {
		width: 64px;
		height: 64px;
		position: absolute;
		top: 15px;
		right: 15px;
		border-radius: .4rem;
		box-shadow: 0 0 15px -5px #000;
	}
	/*@media(prefers-color-scheme: light) {
		color: #444444;
		
		.title {
			color: #888888;
		}
		.author {
			color: #666666;
		}
    }*/
`;

export const render = () => {
	return (
		<div className="quote-of-the-day-container">
			<div className="quote-of-the-day">
				<h5 className="title">{quote_of_the_day.title}</h5>
				<blockquote className="quote" cite="https://quotes.rest/qod">{quote_of_the_day.quote}</blockquote>
				<cite className="author">—{quote_of_the_day.author}</cite>
				<img className="image" src={quote_of_the_day.background}/>
			</div>
		</div>
    );
};
