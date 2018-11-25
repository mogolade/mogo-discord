
export { Pager, PagingOptions } from './services/pager'
export { Router } from './services/router'
export { Player, PlayerAction, PlayerOptions, GetQueueForGuild } from './services/player'

/**
 * @interface iRoute
 * @description 
 * Properties of a route. 
 * Ensures we can make decisions based on the properties implemented via this interface.
 * @var {String} name - name of route
 * @var {Function} controller - function to be executed on match
 * @var {Array<String>} alias - Array of alias' to match on
 * @var {iRoute[]} children - Child routes
 * @var {Boolean} default - is this the default child route?
 */
export interface iRoute {
	name: String,
	controller?: Function,
	alias: String[],
    children?: iRoute[],
    default?: Boolean,
}