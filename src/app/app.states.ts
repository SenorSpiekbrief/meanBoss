import { AppComponent } from './app.component';
import { WelcomeComponent } from './screens/welcome/welcome.component';
import { HomeComponent } from './screens/home/home.component';
import { LoginComponent } from './screens/login/login.component';
import { SearchComponent } from './screens/search/search.component';
import { BrowseComponent } from './screens/browse/browse.component';
import { DesignationsComponent } from './screens/designations/designations.component';
import { ReservationsComponent } from './screens/reservations/reservations.component';
import { TrainingsComponent } from './screens/trainings/trainings.component';

import { StockComponent } from './screens/stock/stock.component';
import { Transition } from '@uirouter/core';

/**
 * This is the parent state for the entire application.
 *
 * This state's primary purposes are:
 * 1) Shows the outermost chrome (including the navigation and logout for authenticated users)
 * 2) Provide a viewport (ui-view) for a substate to plug into
 */
export const appState = {
  name: 'app',
  redirectTo: 'welcome',
};

/**
 * This is the 'welcome' state.  It is the default state (as defined by app.js) if no other state
 * can be matched to the URL.
 */
export const welcomeState = {
  name: 'welcome',
  url: '/welcome',
  views: {
    $default: {component:WelcomeComponent}
  }
};

/**
 * This is a home screen for authenticated users.
 *
 * It shows giant buttons which activate their respective submodules: Messages, Contacts, Preferences
 */
export const homeState = {
  name: 'home',
  url: '/home',
  views: {
    $default: {component: HomeComponent}
  }
};


/**
 * This is the login state.  It is activated when the user navigates to /login, or if a unauthenticated
 * user attempts to access a protected state (or substate) which requires authentication. (see routerhooks/requiresAuth.js)
 *
 * It shows a fake login dialog and prompts the user to authenticate.  Once the user authenticates, it then
 * reactivates the state that the user originally came from.
 */
export const loginState = {
  name: 'login',
  views: {
    'header': {component:LoginComponent}
  }
};

/**
 * A resolve function for 'login' state which figures out what state to return to, after a successful login.
 *
 * If the user was initially redirected to login state (due to the requiresAuth redirect), then return the toState/params
 * they were redirected from.  Otherwise, if they transitioned directly, return the fromState/params.  Otherwise
 * return the main "home" state.
 */
export function returnTo ($transition$: Transition): any {
  if ($transition$.redirectedFrom() != null) {
    // The user was redirected to the login state (e.g., via the requiresAuth hook when trying to activate contacts)
    // Return to the original attempted target state (e.g., contacts)
    return $transition$.redirectedFrom().targetState();
  }

  const $state = $transition$.router.stateService;

  // The user was not redirected to the login state; they directly activated the login state somehow.
  // Return them to the state they came from.
  if ($transition$.from().name !== '') {
    return $state.target($transition$.from(), $transition$.params('from'));
  }

  // If the fromState's name is empty, then this was the initial transition. Just return them to the home state
  return $state.target('home');
}

// This future state is a placeholder for all the lazy loaded Contacts states
// The Contacts NgModule isn't loaded until a Contacts link is activated
/*export const contactsFutureState = {
  name: 'contacts.**',
  url: '/contacts',
  loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule)
};

// This future state is a placeholder for the lazy loaded Prefs states
export const prefsFutureState = {
  name: 'prefs.**',
  url: '/prefs',
  loadChildren: () => import('./prefs/prefs.module').then(m => m.PrefsModule)
};

// This future state is a placeholder for the lazy loaded My Messages feature module
export const mymessagesFutureState = {
  name: 'mymessages.**',
  url: '/mymessages',
  loadChildren: () => import('./mymessages/mymessages.module').then(m => m.MymessagesModule)
};*/

export const searchState = {
  name: 'search',
  url: '/search',
  
  views: {
     $default: {component:SearchComponent}
  }
};

export const browseState = {
  name: 'browse',
  url: '/browse',
  
  views: { 
    $default: {component:BrowseComponent}
  }
};

export const designationState = {
  name: 'designations',
  url: '/designations',
  
  views: { 
    $default: {component:DesignationsComponent}
  }
};


export const reservationState = {
  name: 'reservations',
  url: '/reservations',
  
  views: { 
    $default: {component:ReservationsComponent}
  }
};

export const trainingState = {
  name: 'trainings',
  url: '/trainings',
  
  views: { 
    $default: {component:TrainingsComponent}
  }
};

export const stockState = {
  name: 'stock',
  url: '/stock',  
  views: {
    $default: {component:StockComponent},
    header:{component:LoginComponent}
  }
};

export const APP_STATES = [
  appState,
  welcomeState,
  homeState,
  loginState,
  searchState,
  browseState,
  designationState,
  reservationState,
  trainingState,
  stockState
  ];