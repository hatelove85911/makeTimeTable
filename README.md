# makeTimeTable
make time table is a command line tool intended to be used generating dynamic random time table data


## Background
When developing applications dealing with transporation, usually concern the railway, aviation 
or public transporation industry like bus, or metro ... You'll want to have some time table data simulate like a real 
schedule, but to manually come up such kind of time data is a pain. That's why I wrote this tool to dynamically 
generate fake and random time table data.


## Use as command line tool
    makeTimeTable -f path_to_configuration_file  
    makeTimeTable -c configuration_json_string

if your configuration is correct, the json string of generated data will be output to the terminal screen.

### Options
* -f  
-f option allow you to furthur specify an argument which is a path to the a configuration file that tells the
tool what kind of time table data to generate.
* -c  
-c option is like -f, but instead of specify a file path, you specify a configuration **json** string directly

### Configuration
    {
        "start": "2015-04-18 04:04", // specify the departure time for the first stage
        "number": 56                 // specify how many stages do you want
    }
