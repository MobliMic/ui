A simple UI kit I built for myself when making simple react websites. Usually with Next.js.

The idea is to provide the user with some basic layout and common design which can be built upon if needed or just used as is.

This is very much a work in progress and will be very specific to the sites I am working on so I don't recommend you use this for your own sites. but feel free to fork it and maintain a copy for yourself.
I will be providing no maintenance or support beyond bugs that affect me or security issues.

```
yarn add @moblimic/ui
```

### Global Styling and Reset

This will add the reset styles and provide some basic look and feel i use to get started prototyping out a site.

```
import GlobalStyles from '@moblimic/ui/globalStyles'

<>
    <GlobalStyles />
</>
```

## TODO

- [ ] Move generic component styles from generic.js to typography components

## Contributing

Feel free to create a pull request for bugs and security updates. If you want to create new components for use in the ui kit then feel free as well. Changes to existing components are unlikely to be merged.

## Changelog

---

### 1.0.0

Staring to add the basic components im using etc. This version has no use. Just configuring the package

### 1.0.1

Tweaking the configuration etc and the way I publish the package

### 1.1.0

The first version with working components for use in my projects.

Set up docs folder for gh-pages

### 1.1.1

Adding props to avatar

# 1.1.2

Fixing P tag
