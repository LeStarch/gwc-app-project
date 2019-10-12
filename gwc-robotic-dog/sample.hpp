/**
 * sample.h:
 *
 * This file defines the variables needed to play samples using the aqduino. These include the frequency, count, and
 * raw data for the set of samples. These defenitions are externally defined and should be auto-generated by the
 * companion script.  If you get linker errors, you likely didn't generate a valid C++ file next to this file.
 *
 * @author Michael
 */
#include <avr/pgmspace.h>
#ifndef SAMPLE_H
#define SAMPLE_H
    extern const unsigned int SAMPLE_FREQUENCY;
    extern const unsigned int SAMPLE_COUNT;
    extern const unsigned char PROGMEM SAMPLES[];
#endif
