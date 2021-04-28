Passage_array = [ ];
	
	function submit()
	{
        
        var Text_1 = document.getElementById("Text_1").value;
        var Text_2 = document.getElementById("Text_2").value;
        var Text_3 = document.getElementById("Text_3").value;
        var Text_4 = document.getElementById("Text_4").value;

        Passage_array.push(Text_1);
        Passage_array.push(Text_2);
        Passage_array.push(Text_3);
        Passage_array.push(Text_4);

		console.log(Passage_array);
		
        document.getElementById("passage").innerHTML = Passage_array;

	}

