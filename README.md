# snek

## Goal

Evolving a snake-like robot for exploration of small areas.

## Structure
### Robot configuration files

* `robot.txt` : Contains the description of the robot's architecture

### Environment configuration files

* `simpleArena.txt` : Contains the description of the arena
* `startPos.txt` : Configures the robot's starting position
* `singleLightSource.txt`: Configures the light source's position
* `confArena.txt` : Configures the simulation parameters

### Evolution configuration files

* `myEvolConfFull.txt` : Configures the evolutionary parameters
* `custom_scenario.js` : Runs the evolution (this is where the fitness function lies)

### Result files

* `BestAvgStd.txt` : CSV formatted as `iteration, fitness, mean_population_fitness, std_population_fitness`
* `GenerationBest-40.json` : Final configuration found by the evolution
