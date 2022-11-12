import React from 'react'
import { Partytown } from '@builder.io/partytown/react'

export const onRenderBody = ({ setHeadComponents }) => {
	setHeadComponents([
		<Partytown key='partytown' debug={true} forward={['gtag']} />,
		<script
			src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GATSBY_GA_MEASUREMENT_ID}`}
			key='analytics'
			type='text/partytown'
		/>,
		<script
			key='gtag-config'
			dangerouslySetInnerHTML={{
				__html: `window.dataLayer = window.dataLayer || [];
          window.gtag = function gtag(){ window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.GATSBY_GA_MEASUREMENT_ID}', { send_page_view: false })`,
			}}
		/>,
	])
}
