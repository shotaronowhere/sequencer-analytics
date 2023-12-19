# Sequencer Analytics

Fetches data from subgraphs indexing sequencer performance and writes the data to a csv. Export into your data viz tool of choice. See ```gas.csv``` and ```delay.csv``` for sample data.

### Install the dependencies

```bash
$ yarn install
```

# Delay

Indexes sequencer performance from the perspective of L1. Delay seconds and blocks are tracked for delayed messages from delivery to sequencing.


```bash
$ yarn start:delay
```

# Arb Gas

Indexes gas prices for L1 and L2 from perspective of L2.

### Fetch Arb Gas Data

```bash
$ yarn start:gas
```

![image](https://github.com/shotaronowhere/sequencer-analytics/assets/10378902/cea57f9e-05a2-4a3c-91f7-10592c4e6d1a)

![image](https://github.com/shotaronowhere/sequencer-analytics/assets/10378902/1eafa741-88c9-44b6-aefa-ac158265071e)
