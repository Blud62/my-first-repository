def countdown(number)
    if number <= 0
      puts number
    else 
      puts number
      puts countdown(number - 1)
    end 
  end
  
  countdown(10)
  countdown(3)
  countdown(-1)
  