#include<iostream>
using namespace std;

void bsort(int arr[], int n){
    for(int i = 0; i<n; i++){
        for(int j = 1; j<n; j++){
            if(arr[j]<arr[i]){
                cout << "Swapping " << arr[i] << " and " << arr[j] << endl;
                int temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
        cout << "After i = " << i << ": ";
        for(int k = 0; k<n; k++){
            cout << arr[k] << " ";
        }
        cout << endl;
    }
    cout << "Final sorted array: ";
    for(int k = 0; k<n; k++){
        cout << arr[k] << " ";
    }
    cout << endl;
}

int main(){
    int n;
    cin >> n;
    int arr[n];
    for(int i = 0; i<n; i++){
        cin >> arr[i];
    }
    bsort(arr,n);
}
