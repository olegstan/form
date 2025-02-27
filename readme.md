#проблема и решение

Warning: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
   See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem. Error Component Stack
   at ot (styled-components.browser.esm.js:588:1)
   at Router (index.js:1189:1)
   at BrowserRouter (index.js:616:1)
   
#линкануть для работы с пакетом

cd ./node_modules/react
npm link

#переходи в нужный проект и пишем

npm link react finform

### UPDATED 27.02.25
в этой папке
```bash
npm run build
rm -rf node_modules/react
npm link
```

в папке целевого проекта: 
```bash
npm link finform
```