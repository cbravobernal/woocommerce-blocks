/**
 * External dependencies
 */
import { registerStore } from '@wordpress/data';
import { controls as dataControls } from '@wordpress/data-controls';

/**
 * Internal dependencies
 */
import reducer, { State } from './reducers';
import { STORE_KEY } from './constants';
import * as actions from './actions';
import { controls as sharedControls } from '../shared-controls';
import controls from './controls';
import * as selectors from './selectors';
import { DispatchFromMap, SelectFromMap } from '../mapped-types';

registerStore< State >( STORE_KEY, {
	reducer,
	actions,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	controls: { ...dataControls, ...sharedControls, ...controls } as any,
	selectors,
} );

declare module '@wordpress/data' {
	function dispatch(
		key: typeof STORE_KEY
	): DispatchFromMap< typeof actions >;
	function select(
		key: typeof STORE_KEY
	): SelectFromMap< typeof selectors > & {
		hasFinishedResolution: ( selector: string ) => boolean;
	};
}

export const PAYMENT_METHOD_DATA_STORE_KEY = STORE_KEY;
