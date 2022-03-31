Java.perform(
    function () {
        var ToastCls = Java.use('android.widget.Toast');
        var ThrowableCls = Java.use('java.lang.Throwable');
        ToastCls.makeText.overload('android.content.Context', 'java.lang.CharSequence', 'int').implementation = function (arg0, arg1, arg2) {
            common.log("Java Stacktrace: " + arg1);
            var StackTrace = ThrowableCls.$new().getStackTrace()
            for (var stack in StackTrace) {
                common.log(StackTrace[stack]);
            }
            return this.makeText(arg0, arg1, arg2);
        }
        common.log("hooked");
    }
);
