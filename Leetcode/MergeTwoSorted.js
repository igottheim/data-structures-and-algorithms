var mergeTwoLists = function(list1, list2) {

    let array = []
    while(list1.length>0 && list2.length>0)
        {
            if(list1[0]<=list2[0])
            {
                array.push(list1[0])
                list1.slice(0,1)
            }
            else{
            array.push(list2[0])
            list2.slice(0,1)
            }

        }

}


mergeTwoLists([1,2,4], [1,3,4])