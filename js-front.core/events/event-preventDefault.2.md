# What's the difference between event.preventDefault() and event.stopPropagation() methods?

The event.preventDefault() method prevents the default behavior of an element. If used in a form element it prevents it from submitting. If used in an anchor element it prevents it from navigating. If used in a contextmenu it prevents it from showing or displaying. While the event.stopPropagation() method stops the propogation of an event or it stops the event from occurring in the bubbling or capturing phase.

# How to know if the event.preventDefault() method was used in an element?

We can use the event.defaultPrevented property in the event object. It returns a boolean indicating if the event.preventDefault() was called in a particular element.
