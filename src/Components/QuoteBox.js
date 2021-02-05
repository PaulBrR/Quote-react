import React, { useState } from 'react';
import Data from '../quotes.json'
import Text from './Text';
import RandomPick from './RandomPick';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const colors = [ // Array for Ramdom Color 
	'#184d47',
	'#2c061f',
	'#16c79a',
	'#ff884b',
	'#00917c',
	'#433520'
]

const QuoteBox = ( ) => {
	const [quotePosition, setQuotePosition ] = useState( RandomPick( Data.quotes.length ) );

	const handlerQuotePosition = ( ) => {
		setQuotePosition( RandomPick( Data.quotes.length ) );
	}

	const author = '@ ' + Data.quotes[ quotePosition ].author;
	const color = colors[ RandomPick( colors.length ) ];
	const quote = '"' + Data.quotes[ quotePosition ].quote + '"';
	
	const footer = {
		textAlign: 'right',
		padding: '2% 0',
	}

	const button_next = {
		fontSize: '1.2rem',
		borderRadius: '10px',
		padding: '.3rem',
		color: '#ffff',
		backgroundColor: color,
		textAlign: 'right',
	}

	return (
		
			<div className="container" >
			<Text
				size='2.5rem'
				align='left'
				color={ color }
				text={ quote }
			/>
			<br />
			<Text
				size='1.8rem'
				align='right'
				color={ color }
				
				text={ author }
			/>
			<div style= { footer }>
				<button onClick={ handlerQuotePosition } style={ button_next }>
					Quote of the Day
				</button>
			</div>
		</div>
		
		
	)
}

export default QuoteBox; 