$global_vaiable = 10
class Class1
   def print_glbal
      puts "Global variable in Class1 is 12"
   end
end
class Class2
   def print_global
      puts "Global variable in Class2 is #$global_vaiable"
   end
end

class1obj = Class1.new
class1obj.print_global
class2obj = Class2.new
class2obj.print_global
