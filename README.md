# snek

## Goal

Evolving a snake-like robot for exploration of small areas.

## Structure
### Robot configuration files

* `robot.txt` : Contains the description of the robot's architecture

You can follow [this documentation](http://robogen.org/docs/guidelines-for-writing-a-robot-text-file/) to edit the robot file.

### Environment configuration files

* `simpleArena.txt` : Contains the description of the arena
* `startPos.txt` : Configures the robot's starting position
* `singleLightSource.txt`: Configures the light source's position
* `confArena.txt` : Configures the simulation parameters

You can follow [this documentation](http://robogen.org/docs/evolution-configuration/#Simulator_settings) to edit the environment configuration.

### Evolution configuration files

* `myEvolConfFull.txt` : Configures the evolutionary parameters
* `custom_scenario.js` : Runs the evolution (this is where the fitness function lies)

You can follow [this documentation](http://robogen.org/docs/evolution-configuration/#Evolution_client_settings) to edit the environment configuration.

### Result files

* `BestAvgStd.txt` : CSV formatted as `iteration, fitness, mean_population_fitness, std_population_fitness`
* `GenerationBest-40.json` : Final configuration found by the evolution

## Running snek

1. Go to [http://robogen.com/app](http://robogen.com/app)
2. Go to the *Advanced* tab.
3. Create a new folder, enter it, and upload the files you downloaded from this repository (`git clone https://github.com/dtsbourg/snek`)
4. Click on *Start a new simulation*.
5. Configure the simulation settings as shown below :

![Simulation configuration](simulation_config.png)

*Note that you can chose to enable logs to get the output log files and neural network file.*

6. Click run !
