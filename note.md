```html
<svelte:head>
	...
</svelte:head>
```

`svelte:head` tag/component allows us to add any head info that we want in regular html so you get full control of what you want to add there

## \_\_Layout

`__layout.svelte` will add whatever you put on it to every page

the layout need to desplay the childerns, which are page components

### Implement the search pokemon feature

create a search bar component that has an input element for user to type in the name of pokemon
the input string will be search in the pokemart store to find the matching name

something to do with reactivity
use this feature to tract the input from the search bar
