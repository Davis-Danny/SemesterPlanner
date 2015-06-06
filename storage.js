var storage = {
    //sections is an array to store all the sections we have collected so far
    sections: [],
    //this function returns an object that contains name, time, and days
    newSection: function (name, time, days) {
        var section = {name:name,time:time,days:days};
        return section;
    },
    //adds a section to sections. Also performs rudimentary validation by checking that 
    //  name, time, and days all have a value.
    addSection: function (section) {
        if(section.name === undefined || section.time === undefined || section.days === undefined){
            output("section not valid");
            return;
        }
        var sections = this.sections;
        sections.push(section);

    },
    
    // convenience function: creates a section with newSection(), then adds it with addSection()
    // returns the created section
    addNewSection: function (name, time, days) {
        var section = this.newSection(name, time, days);
        this.addSection(section);
        return section;
    }

};

