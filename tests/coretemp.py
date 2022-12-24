# Import the required libraries
import os
import re

# Define a function to get the CPU temperature
def get_cpu_temp():
    # Read the temperature file
    with open("/sys/class/thermal/thermal_zone0/temp", "r") as temp_file:
        temp_str = temp_file.read()
    
    # Extract the temperature from the file
    temp_match = re.search(r"\d+", temp_str)
    temp = int(temp_match.group(0)) / 1000

    # Return the temperature in degrees Celsius
    return temp

# Get the CPU temperature
cpu_temp = get_cpu_temp()

# Print the temperature
print("CPU temperature: %.1f degrees Celsius" % cpu_temp)
